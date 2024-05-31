import { useState } from "react";
import { motion } from "framer-motion";
const crewTabsData = [
  {
    index: 0,
    job: "Commander ",
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    index: 1,
    job: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    index: 2,
    job: "PILOT",
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    index: 3,
    job: "Flight Engineer",
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

export const Crew = () => {
  const [tab, setTab] = useState(0);

  const { index, name, job, desc } = crewTabsData[tab];
  return (
    <motion.div exit={{ opacity: 0 }} className="crew-container">
      <div className="title-text">
        <b>02</b>
        <p>MEET YOUR CREW</p>
      </div>
      <div className="crew-card-container">
        <div className="card-text">
          <p className="job">{job}</p>
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
        <img src={`.././images/crew/${index + 1}.png`} alt="img" />
      </div>
      <div className="tabs">
        {Array(4)
          .fill(0)
          .map((item, key) => {
            return (
              <button
                key={key}
                id={key}
                className={tab == key ? "tab-list--active" : "tab"}
                onClick={(e) => setTab(e.target.id)}
              ></button>
            );
          })}
      </div>
    </motion.div>
  );
};
