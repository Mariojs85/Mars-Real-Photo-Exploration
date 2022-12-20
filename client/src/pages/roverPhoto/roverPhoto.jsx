import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "../../components/datePicker/datePicker";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { Dropdown, Button } from "react-bootstrap";
import { rovers, roverCameras } from "../../data/data";
import { getManifest, getPhotos, getLatestPhotos } from "../../services/api";
import Spinner from "../../components/spinner/spinner";
import PaginatedList from "../../components/paginatedList/paginatedList";
import Image from "../../components/image/image";

import "./roverPhoto.css";

const Roverphoto = () => {
  const [timeRange, setTimeRange] = useState("");
  const [camera, setCamera] = useState();
  const [earthDate, setEarthDate] = useState();
  const [martianSol, setMartianSol] = useState(0);
  const [manifest, setManifest] = useState();
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [latestphotos, setLatestPhotos] = useState([]);
  const [noPhotoMsg, setNoPhotoMsg] = useState(
    "Select Time Range and Rover Camera or Latest Photos, to see images."
  );

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
  }, [rover]);

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
    const filteyellowList = roverCameras.filter((obj) =>
      obj.rovers.includes(rover.toLocaleLowerCase())
    );
    console.log(filteyellowList);
    return filteyellowList.map((c) => (
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

  const handleGetLatestPhotos = () => {
    getLatestPhotos(rover)
      .then((res) => {
        setLatestPhotos(res.latest_photos);
        if (res.latest_photos.length === 0) setNoPhotoMsg("No photos found");
        else setNoPhotoMsg("Here are the Latest Photos taken on Mars");
        setPhotos([]);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGetPhots = () => {
    const params = {};
    params.camera = camera;
    if (timeRange === "Earth Time") {
      params.earth_date = earthDate;
    } else if (timeRange === "Martian Sol") {
      params.sol = martianSol;
    } else alert("Please choose a Time Range and a Camera first");
    console.log(params);
    getPhotos(params, rover, )
      .then((res) => {
        setPhotos(res.photos);
        setLatestPhotos([]);
        if (timeRange && !camera) alert("Please choose a Rover Camera from the Dropdown");
        else if (timeRange && camera && res.photos.length === 0) setNoPhotoMsg("No photos found for that Time Range with selected camera");
        else if (photos !==null) setNoPhotoMsg(timeRange)
        
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
        <div className="rover-photo-filters d-flex align-items-center flex-wrap gap-3">
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
                <Dropdown.Divider />
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
              ) : timeRange === "Martian Sol" ? (
                <input
                  type="number"
                  onChange={handleMartianSol}
                  value={martianSol || "0"}
                  style={{ maxWidth: "8rem" }}
                  min={0}
                  max={manifest?.max_sol}
                />
              ) : (
                timeRange
              )}
            </div>
          </div>
          <div>
            <Dropdown onSelect={handleSelectCamera}>
              <Dropdown.Toggle
                variant="warning"
                id="dropdown-camera"
                disabled={!timeRange}
              >
                {camera || "Rover Camera"}
              </Dropdown.Toggle>

              <Dropdown.Menu>{getCamerasListByRover()}</Dropdown.Menu>
            </Dropdown>
          </div>
          <Button variant="outline-info" onClick={handleGetPhots}>
            Get Photos
          </Button>
          <Button variant="danger" onClick={handleGetLatestPhotos}>
            Get Latest Photos
          </Button>
        </div>
        <hr style={{ borderColor: "white" }} />
        <div className="home-cards-container d-flex m-4 gap-2 justify-content-center">
          {getRover()}
          <div className="">
            <p className="text-white mt-4 ">
              <img
                src="/Photos/Icons/spaceship.png"
                alt=""
                style={{
                  width: "42px",
                  marginLeft: "29px",
                  marginRight: "15px",
                }}
              />
              <span
                className="me-2"
                style={{ color: "#97c1e7", fontWeight: "bold" }}
              >
                Launch Date:
              </span>
              <span style={{ color: "#3ff718" }}>{manifest?.launch_date}</span>
            </p>
            <p className="text-white">
              <img
                src="/Photos/Icons/parachute.png"
                alt=""
                style={{
                  width: "42px",
                  marginLeft: "29px",
                  marginRight: "15px",
                }}
              />
              <span
                className="me-2"
                style={{ color: "#97c1e7", fontWeight: "bold" }}
              >
                Landing Date:
              </span>
              <span style={{ color: "#3ff718" }}>{manifest?.landing_date}</span>
            </p>
            <p className="text-white">
              <img
                src="/Photos/Icons/deadline.png"
                alt=""
                style={{
                  width: "42px",
                  marginLeft: "29px",
                  marginRight: "15px",
                }}
              />
              <span
                className="me-2"
                style={{ color: "#97c1e7", fontWeight: "bold" }}
              >
                Max Date:
              </span>
              <span style={{ color: "#3ff718" }}>{manifest?.max_date}</span>
            </p>
            <p className="text-white">
              <img
                src="/Photos/Icons/calendar.png"
                alt=""
                style={{
                  width: "42px",
                  marginLeft: "29px",
                  marginRight: "15px",
                }}
              />
              <span
                className="me-2"
                style={{ color: "#97c1e7", fontWeight: "bold" }}
              >
                Max Sol:
              </span>
              <span style={{ color: "#3ff718" }}>{manifest?.max_sol}</span>
            </p>
            <p className="text-white">
              <img
                src="/Photos//Icons/totalPhoto.png"
                alt=""
                style={{
                  width: "42px",
                  marginLeft: "29px",
                  marginRight: "15px",
                }}
              />
              <span
                className="me-2"
                style={{ color: "#97c1e7", fontWeight: "bold" }}
              >
                Total Photos:
              </span>
              <span style={{ color: "#3ff718" }}>{manifest?.total_photos}</span>
            </p>
            <p className="text-white">
              <img
                src="/Photos/Icons/clipboard.png"
                alt=""
                style={{
                  width: "42px",
                  marginLeft: "29px",
                  marginRight: "15px",
                }}
              />
              <span
                className="me-2"
                style={{ color: "#97c1e7", fontWeight: "bold" }}
              >
                Mission Status:
              </span>
              <span style={{ color: "#3ff718" }}>{manifest?.status}</span>
            </p>
          </div>
        </div>
        <hr style={{ borderColor: "white" }} />
        <div className="photo-galery-wrapper">
          {photos.length > 0 ? (
            <PaginatedList listContainerClassName="d-flex gap-3 flex-wrap justify-content-center align-items-center m-3">
              {
              photos.map((photo, id) => (
                <a href={photo.img_src} target="_blank" rel="noreferrer">
                  <Image
                    key={id}
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
            <p className="text-white text-center">{noPhotoMsg}</p>
          )}
        </div>
        <div className="photo-galery-wrapper">
          {latestphotos ? (
            <PaginatedList listContainerClassName="d-flex gap-3 flex-wrap justify-content-center align-items-center m-3">
              {latestphotos.map((lastphoto) => (
                <a href={lastphoto.img_src} target="_blank" rel="noreferrer">
                  <Image
                    src={lastphoto.img_src}
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
            <p>Error</p>
          )}
        </div>
      </div>
      {loading && <Spinner global />}
    </>
  );
};

export default Roverphoto;
