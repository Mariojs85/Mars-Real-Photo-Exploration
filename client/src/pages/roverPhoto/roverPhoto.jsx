import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "../../components/filterBy/datePicker/datePicker";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { Dropdown, Button } from "react-bootstrap";
import { rovers, roverCameras } from "../../data/data";
import { getManifest, getPhotos } from "../../services/api";
import Spinner from "../../components/spinner/spinner";
import PaginatedList from "../../components/paginatedList/paginatedList";
import Image from "../../components/image/image";

import "./roverPhoto.css";

const Roverphoto = () => {
  const [timeRange, setTimeRange] = useState("Earth Time");
  const [camera, setCamera] = useState();
  const [earthDate, setEarthDate] = useState();
  const [martianSol, setMartianSol] = useState(0);
  const [manifest, setManifest] = useState();
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const { rover } = useParams();

  useEffect(() => {
    setLoading(true);
    getManifest(rover)
      .then((res) => {
        setManifest(res.photo_manifest);
        setEarthDate(res.photo_manifest?.max_date);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const getRover = () => {
    const res = rovers.find((obj) => obj.name === rover);
    return <SimpleCard img={res.img} name={res.name} />;
  };

  const handleTimeRangeSelect = (selected) => {
    setTimeRange(selected);
  };

  const handleSelectCamera = (selected) => {
    setCamera(selected);
  };

  const handleSelectedEarthDate = (selected) => {
    setEarthDate(selected);
  };

  const handleMartianSol = (e) => {
    setMartianSol(e.target.value);
  };

  const getCamerasListByRover = () => {
    const filteredList = roverCameras.filter((obj) =>
      obj.rovers.includes(rover.toLocaleLowerCase())
    );
    console.log(filteredList);
    return filteredList.map((c) => (
      <Dropdown.Item
        eventKey={c.cameraCode}
        key={c.cameraCode}
        style={{
          backgroundColor: c?.cameraCode === camera ? "gray" : "initial",
        }}
      >
        {c.name}
      </Dropdown.Item>
    ));
  };

  const handleGetPhots = () => {
    const params = {};
    if (timeRange === "Earth Time") {
      params.earth_date = earthDate;
    } else if (timeRange === "Martian Sol") {
      params.sol = martianSol;
    }
    params.camera = camera;
    console.log(params)
    getPhotos(params, rover)
      .then((res) => {
        setPhotos(res.photos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(camera);

  return (
    <>
      <div>
        <h1 className="text-white text-center">{rover}</h1>
        <div className="rover-photo-filters d-flex align-items-center gap-3">
          <div className="rover-photo-time-range">
            <Dropdown onSelect={handleTimeRangeSelect}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-timerange"
                disabled={false}
              >
                {timeRange || "Time Range"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Earth Time">Earth Time</Dropdown.Item>
                <Dropdown.Item eventKey="Martian Sol">
                  Martian Sol
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div>
              {timeRange === "Earth Time" ? (
                <DatePicker
                  onSelect={handleSelectedEarthDate}
                  value={earthDate}
                  minDate={manifest?.landing_date}
                  maxDate={manifest?.max_date}
                />
              ) : (
                <input
                  type="number"
                  onChange={handleMartianSol}
                  value={martianSol || "0"}
                  style={{ maxWidth: "8rem" }}
                  min={0}
                  max={manifest?.max_sol}
                />
              )}
            </div>
          </div>
          <div>
            <Dropdown onSelect={handleSelectCamera}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-camera"
                disabled={timeRange === undefined}
              >
                {camera || "Rover Camera"}
              </Dropdown.Toggle>

              <Dropdown.Menu>{getCamerasListByRover()}</Dropdown.Menu>
            </Dropdown>
          </div>
          <Button onClick={handleGetPhots}>Get Photos</Button>
        </div>
        <hr style={{ borderColor: "white" }} />
        <div className="home-cards-container d-flex m-4 gap-2 justify-content-center">
          {getRover()}
          <div>
            <p className="text-white">
              <span className="me-2">Landing Date:</span>
              {manifest?.landing_date}
            </p>
            <p className="text-white">
              <span className="me-2">Launch Date:</span>
              {manifest?.launch_date}
            </p>
            <p className="text-white">
              <span className="me-2">Max Date:</span>
              {manifest?.max_date}
            </p>
            <p className="text-white">
              <span className="me-2">Max Sol:</span>
              {manifest?.max_sol}
            </p>
            <p className="text-white">
              <span className="me-2">Total Photos:</span>
              {manifest?.total_photos}
            </p>
            <p className="text-white">
              <span className="me-2">Mission Status:</span>
              {manifest?.status}
            </p>
          </div>
        </div>
        <hr style={{ borderColor: "white" }} />
        <div className="photo-galery-wrapper">
          {photos.length > 0 ? (
            <PaginatedList listContainerClassName="d-flex gap-3 flex-wrap justify-content-center align-items-center m-3">
              {photos.map((photo) => (
                <a href={photo.img_src} target="_blank">
                <Image
                  src={photo.img_src}
                  alt="...mars"
                  className="photos-galery-image"
                  width={320}
                  height={320}
                  phantomHeight={320}
                  phantomWidth={320}
                />
                </a>
              ))}
            </PaginatedList>
          ) : (
            <p className="text-white text-center">No photos found</p>
          )}
        </div>
      </div>
      {loading && <Spinner global />}
    </>
  );
};

export default Roverphoto;
