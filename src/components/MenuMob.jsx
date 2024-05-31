import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const MenuMob = ({ navTabItems, setMenuShow }) => {

  return (
    <div className="menu-mob">
      <img
        src=".././images/icons/close.svg"
        alt="close"
        onClick={() => setMenuShow(false)}
      />
      <ul>
        {navTabItems?.map((item) => {
          const { id, to, bContent, pContent } = item;
          return (
            <li key={id} onClick={() => setMenuShow(false)}>
              <NavLink
                to={to}
              >
                <b>{bContent}</b>
                <p>{pContent}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
MenuMob.propTypes = {
  navTabItems: PropTypes.array,
  setMenuShow: PropTypes.func,
};
