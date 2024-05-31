import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Crew } from "./components/Crew/Crew";
import { Destination } from "./components/Destination/Destination";
import { Technology } from "./components/Technology/Technology";
import { Error } from "./components/Error/Error";
import { Moon } from "./components/Destination/DestinationComponents/Moon";
import { Mars } from "./components/Destination/DestinationComponents/Mars";
import { Europa } from "./components/Destination/DestinationComponents/Europa";
import { Titan } from "./components/Destination/DestinationComponents/Titan";
import { useEffect } from "react";
import {AnimatePresence} from 'framer-motion'
const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.startsWith("/destination")) {
      document.body.style.backgroundImage =
        'url(".././images/bg/destination-bg.png")';
    } else if (location.pathname.startsWith("/crew")) {
      document.body.style.backgroundImage = 'url(".././images/bg/crew-bg.jpg")';
    } else if (location.pathname.startsWith("/technology")) {
      document.body.style.backgroundImage =
        'url(".././images/bg/technology-bg.png")';
    } else {
      document.body.style.backgroundImage = 'url(".././images/bg/home-bg.jpg")';
    }
  }, [location]);
  return (
    <AnimatePresence mode="wait" >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="crew" element={<Crew />} />
          <Route path="destination" element={<Destination />}>
            <Route path="moon" index element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          <Route path="technology" element={<Technology />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};
export default App;
