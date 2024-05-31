import { motion } from "framer-motion";
import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const titleTabs = [
  { id: 0, title: "MOON", to: "moon" },
  { id: 1, title: "MARS", to: "mars" },
  { id: 2, title: "EUROPA", to: "europa" },
  { id: 3, title: "TITAN", to: "titan" },
];

export const Destination = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("moon");
  }, []);
  return (
    <>
      <motion.div exit={{ opacity: 0 }} className="destination-container">
        <div className="title">
          <div className="title-text">
            <b>01</b>
            <p>Pick your destination</p>
          </div>
          <ul className="title-tabs">
            {titleTabs.map((item) => {
              const { id, title, to } = item;
              return (
                <li key={id}>
                  <NavLink to={to}>
                    <p>{title}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <Outlet />
      </motion.div>
    </>
  );
};
