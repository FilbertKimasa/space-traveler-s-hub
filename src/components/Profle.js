import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Profile.css';

function Profle() {
  const rockets = useSelector((state) => state.rockets.rockets).filter(
    (rocket) => rocket.reserved,
  );

  return (
    <section className="profile-section">
      <div>My Mission</div>
      <div>
        <h2>My Rockets</h2>
        <ul className="rocket-reserved-list">
          {rockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Profle;
