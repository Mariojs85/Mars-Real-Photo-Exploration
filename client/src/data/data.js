const bullet = "\u2022";
const bulletWithSpace = `${bullet} `;
const persevaranceTimer = (
  <iframe
    title="a"
    src="https://free.timeanddate.com/countdown/i8l3auvn/cf11/cm0/cu4/ct4/cs0/ca0/cr0/ss0/cacf90/cpcfff/pct/tc66c/fs110/szw256/szh108/tacff0/tptLive%20Mission/tpcff0/macff0/mpcfff/iso2020-07-30T11:50:00/pl4/pr4/pt3/pb4"
    allowtransparency="true"
    frameBorder="0"
    width="284"
    height="60"
  ></iframe>
);
const missionTimer = (
  //  <script>(function(d, s, id) { var js, pjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//www.tickcounter.com/static/js/loader.js"; pjs.parentNode.insertBefore(js, pjs); }(document, "script", "tickcounter-sdk"));</script><a data-type="countup" data-id="270492" class="tickcounter" style="display: block; width: 100%; position: relative; padding-bottom: 25%" title="Countup" href="//www.tickcounter.com/countup">Countup</a>
  <iframe
    title="b"
    src="https://free.timeanddate.com/countdown/i8l3auvn/cf11/cm0/cu4/ct4/cs0/ca0/cr0/ss0/cacf90/cpcfff/pct/tc66c/fs110/szw256/szh108/tacff0/tptLive%20Mission/tpcff0/macff0/mpcfff/iso2011-11-26T15:02:00/pl4/pr4/pt3/pb4"
    allowtransparency="true"
    frameBorder="0"
    width="294"
    height="60"
  ></iframe>
);
export const rovers = [
  {
    name: "Spirit",
    img: "/Photos/spirit.jpg",
    missionTime:
      "Mission Completed\nJun. 10, 2003 — May. 25, 2011\n07 YRS 11 MOS\n13 DAYS 06 HRS 01 MINS 13 SECS",
    description: `${bulletWithSpace}Spirit uncovered strong evidence that Mars was once much wetter than it is now.\n\n${bulletWithSpace}It operated for 6 years, 2 months, and 19 days, more than 25 times its original intended lifetime.\n\n${bulletWithSpace}The rover traveled 4.8 miles (7.73 kilometers) across the Martian plains.\n\n${bulletWithSpace}On May 25, 2011, NASA ended efforts to contact the marooned rover and declared its mission complete. \n\n${bulletWithSpace}The rover had been silent since March 2010`,
  },
  {
    name: "Opportunity",
    img: "/Photos/edu_rover_large.jpg",
    missionTime:
      "Mission Completed\nJul. 8, 2003 — Jun. 10, 2018\n14 YRS 11 MOS 01 DAYS 20 HRS 41 MINS 45 SECS",
    description: `${bulletWithSpace}Opportunity found evidence that Mars may once have been able to sustain microbial life.\n\n${bulletWithSpace}Exceeded its life expectancy by 60 times and had traveled more than 28 miles (45 kilometers).\n\n${bulletWithSpace}Stopped communicating with Earth after a severe Mars-wide dust storm blanketed its location in June 2018.`,
  },
  {
    name: "Curiosity",
    img: "/Photos/curiosity-arm-extended-l  2.jpg",
    missionTime: [missionTimer],
    description: `\n${bulletWithSpace}Curiosity has four main science goals\n\n \u0031 Determine whether life ever arose on Mars.\n \u0032 Characterize the climate of Mars. \n \u0033 Characterize the geology of Mars. \n \u0034 Prepare for human exploration. \n\n${bulletWithSpace}Curiosity snapped a 1.8 billion-pixel panorama on Mars.\n\n ${bulletWithSpace}The Mars Science Laboratory mission tested an entirely new landing method.\n\n ${bulletWithSpace}Curiosity’s power system has far exceeded its operational lifespan.`,
  },
  {
    name: "Perseverance",
    img: "/Photos/persevera.avif",
    missionTime: [persevaranceTimer],

    description: `\n•Goals:\n Explore a geologically diverse landing site 
    \n•Assess ancient habitability \n\n• Seek signs of ancient life, particularly in special rocks known to preserve signs of life over time \n\n• Gather rock and soil samples that could be returned to Earth by a future NASA mission \n\n• Demonstrate technology for future robotic and human exploration`,
  },
];

export const roverCameras = [
  {
    name: "Front Hazard Avoidance Camera",
    rovers: ["curiosity", "opportunity", "spirit"],
    cameraCode: "FHAZ",
  },
  {
    name: "Rear Hazard Avoidance Camera",
    rovers: ["curiosity", "opportunity", "spirit"],
    cameraCode: "RHAZ",
  },
  {
    name: "Mast Camera",
    rovers: ["curiosity"],
    cameraCode: "MAST",
  },
  {
    name: "Chemistry and Camera Complex",
    rovers: ["curiosity"],
    cameraCode: "CHEMCAM",
  },
  {
    name: "Mars Hand Lens Imager",
    rovers: ["curiosity"],
    cameraCode: "MHALI",
  },
  {
    name: "Mars Descent Imager",
    rovers: ["curiosity"],
    cameraCode: "MARDI",
  },
  {
    name: "Navigation Camera",
    rovers: ["curiosity", "opportunity", "spirit"],
    cameraCode: "NAVCAM",
  },
  {
    name: "Panoramic Camera",
    rovers: ["opportunity", "spirit"],
    cameraCode: "PANCAM",
  },
  {
    name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    rovers: ["opportunity", "spirit"],
  },
  {
    name: "Rover Up-Look Camera",
    rovers: ["perseverance "],
    cameraCode: "EDL_RUCAM",
  },
  {
    name: "Rover Down-Look Camera",
    rovers: ["perseverance"],
    cameraCode: "EDL_RDCAM",
  },
  {
    name: "Descent Stage Down-Look Camera",
    rovers: ["perseverance"],
    cameraCode: "EDL_DDCAM",
  },
  {
    name: "Parachute Up-Look Camera A",
    rovers: ["perseverance"],
    cameraCode: "EDL_PUCAM1",
  },
  {
    name: "Parachute Up-Look Camera B",
    rovers: ["perseverance"],
    cameraCode: "EDL_PUCAM2",
  },
  {
    name: "Navigation Camera - Left",
    rovers: ["perseverance"],
    cameraCode: "NAVCAM_LEFT",
  },
  {
    name: "Navigation Camera - Right",
    rovers: ["perseverance"],
    cameraCode: "NAVCAM_RIGHT",
  },
  {
    name: "Mast Camera Zoom - Right",
    rovers: ["perseverance"],
    cameraCode: "MCZ_RIGHT",
  },
  {
    name: "Mast Camera Zoom - Left",
    rovers: ["perseverance"],
    cameraCode: "MCZ_LEFT",
  },
  {
    name: "Front Hazard Avoidance Camera - Left",
    rovers: ["perseverance"],
    cameraCode: "FRONT_HAZCAM_LEFT_A",
  },
  {
    name: "Front Hazard Avoidance Camera - Right",
    rovers: ["perseverance"],
    cameraCode: "FRONT_HAZCAM_RIGHT_A",
  },
  {
    name: "Rear Hazard Avoidance Camera - Left",
    rovers: ["perseverance"],
    cameraCode: "REAR_HAZCAM_LEFT",
  },
  {
    name: "Rear Hazard Avoidance Camera - Right",
    rovers: ["perseverance"],
    cameraCode: "REAR_HAZCAM_RIGHT",
  },
  {
    name: "MEDA Skycam",
    rovers: ["perseverance"],
    cameraCode: "SKYCAM",
  },
  {
    name: "SHERLOC WATSON Camera",
    rovers: ["perseverance"],
    cameraCode: "SHERLOC_WATSON",
  },
];
