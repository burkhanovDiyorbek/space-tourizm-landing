import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuMob } from "../MenuMob";

const navTabItems = [
  { id: 0, to: "/", bContent: "00", pContent: "HOME" },
  { id: 1, to: "/destination", bContent: "01", pContent: "DESTINATION" },
  { id: 2, to: "/crew", bContent: "02", pContent: "CREW" },
  { id: 3, to: "/technology", bContent: "03", pContent: "TECHNOLOGY" },
];

export const Header = () => {
  // const [dataId, setDataId] = useState(0);
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className="header-container">
      <Link to={"/"}>
        <img src="./images/icons/logo.svg" alt="logo" />
      </Link>
      <div className="line"></div>
      <ul>
        {navTabItems.map((item) => {
          const { id, to, bContent, pContent } = item;
          return (
            <li key={id}>
              <NavLink
                to={to}
                // className={dataId == id ? "nav-list--active" : ""}
                // onClick={() => setDataId(id)}
              >
                <b>{bContent}</b>
                <p>{pContent}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="menu-icon" onClick={() => setMenuShow(true)}>
        <img src=".././images/icons/menu.svg" alt="menu" />
      </div>
      {menuShow ? (
        <MenuMob navTabItems={navTabItems} setMenuShow={setMenuShow} />
      ) : (
        ""
      )}
    </div>
  );
};
