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

  const { rover } = useParams();

  useEffect(() => {
    getManifest()
      .then((res) => {
        setManifest(res.photo_manifest);
      })
      .catch((err) => console.log(err));

    getPhotos()
      .then((result) => {
        const photoData = Object.values(result);

        console.log(photoData[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const getRover = () => {
    const res = rovers.find((obj) => obj.name === rover);
    return <SimpleCard img={res.img} name={res.name} />;
  };

  // const [cardData, setCardData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await getManifest();
  //     const data = await res.json();
  //     console.log(data)
  //     const photo_manifest = data.map((manifest) => {
  //       return {
  //         name: {
  //           data: manifest.name,
  //           label: "name",
  //           type: "text",
  //         },
  //         landing_date: {
  //           data: manifest.landing_date,
  //           label: "landing_date",
  //           type: "text",
  //         },
  //         status: {
  //           data: manifest.status,
  //           label: "status",
  //           type: "text",
  //         },
  //         max_sol: {
  //           data: manifest.max_sol,
  //           label: "max_sol",
  //           type: "number",
  //         },
  //         max_date: {
  //           data: manifest.max_date,
  //           label: "max_date",
  //           type: "date",
  //         },
  //         total_photos: {
  //           data: manifest.total_photos,
  //           label: "total_photos",
  //           type: "number",
  //         },
  //       };
  //     });
  //     setCardData(photo_manifest);
  //     console.log(setCardData)
  //   }
  //   getData();
  // }, []);

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
        <div className="home-cards-container m-4 gap-2 ">{getRover()}</div>
      </div>
    </>
  );
};

export default Roverphoto;
