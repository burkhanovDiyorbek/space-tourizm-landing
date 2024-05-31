import { useState } from "react";
import {motion} from 'framer-motion'
const technologyData = [
  {
    index: 0,
    title: "LAUNCH VEHICLE",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    index: 1,
    title: "SPACEPORT",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    index: 2,
    title: "SPACE CAPSULE",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const tabArr = ["0", "1", "2"];
export const Technology = () => {
  const [tab, setTab] = useState(0);
  const { index, title, desc } = technologyData[tab];

  return (
    <motion.div exit={{ opacity: 0 }} className="technology-container">
      <div className="title">
        <b>03</b>
        <p>SPACE LAUNCH 101</p>
      </div>
      <div className="technology-content-container">
        <div className="technology-tabs">
          {tabArr.map((item, index) => {
            return (
              <button
                key={index}
                id={index}
                className={tab == index ? "tab--active" : ""}
                onClick={(e) => setTab(e.target.id)}
              >
                {index+1}
              </button>
            );
          })}
        </div>
        <div className="technology-content">
          <p>THE TERMINOLOGY…</p>
          <h2>{title}</h2>
          <p className="desc">{desc}</p>
        </div>
        <img src={`.././images/technology/${index + 1}.jpg`} alt="img" />
      </div>
    </motion.div>
  );
};
