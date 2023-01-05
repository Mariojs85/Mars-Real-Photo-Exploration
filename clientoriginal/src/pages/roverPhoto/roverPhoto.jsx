import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "../../components/filterBy/datePicker/datePicker";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { Dropdown } from "react-bootstrap";
import { rovers, roverCameras } from "../../data/data";
import { getManifest, getPhotos } from "../../services/api";
import "./roverPhoto.css";

const Roverphoto = () => {
  const [timeRange, setTimeRange] = useState("Earth Time");
  const [camera, setCamera] = useState();
  const [earthDate, setEarthDate] = useState(new Date());
  const [martianSol, setMartianSol] = useState(0);
  const [manifest, setManifest] = useState();
  const [photos, setPhotos] = useState();

  const { rover } = useParams();

  useEffect(() => {
    getManifest()
    .then((res) => {
      setManifest(res.photo_manifest);
    })
    .catch((err) => console.log(err));
  }, []);
  
  
  useEffect(() => {
    getPhotos()
    .then((result) => {
      setPhotos(result.photos);
    })
      .catch((err) => console.log(err));
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
    return filteredList.map((camera) => (
      <Dropdown.Item eventKey={camera.code}>{camera.name}</Dropdown.Item>
      ));
    };
    console.log(manifest);
    // console.log(photos[0].img_src);
    
    return (
      <>
      <div>
        <h1 className="text-white text-center">{rover}</h1>
        <div className="rover-photo-filters d-flex gap-3">
          <div>
            <Dropdown onSelect={handleTimeRangeSelect}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-timerange"
                disabled={false}
              >
                Time Range
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
                />
              ) : (
                <input
                  type="number"
                  onChange={handleMartianSol}
                  value={martianSol || ""}
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
                Rover Camera
              </Dropdown.Toggle>

              <Dropdown.Menu>{getCamerasListByRover()}</Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="roverFilterPage">
          <div className="home-cards-container m-4 gap-2 ">{getRover()}</div>
          <div className="manifestData">
          {/* <div className="manifestData">{manifest.map(obj=>obj.landing_date)}</div>  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roverphoto;
