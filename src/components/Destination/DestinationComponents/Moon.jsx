export const Moon = () => {
  return (
    <div className="destination-card-container">
      <div className="planet">
        <img src=".././images/destination/1.png" alt="" />
        <div className="planet-text">
          <h2>MOON</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="planet-information">
            <div>
              <p>AVG. DISTANCE</p>
              <h2>384,400 km</h2>
            </div>
            <div>
              <p>Est. travel time</p>
              <h2>3 days</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
