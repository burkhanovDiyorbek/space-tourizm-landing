import {motion} from 'framer-motion'

export const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className="home-container">
      <div className="home-text">
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h2>SPACE</h2>
        <p className="p">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore-btn">
        <p>EXPLORE</p>
      </div>
    </motion.div>
  );
};
