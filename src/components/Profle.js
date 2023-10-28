import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Profile.css';

function Profle() {
  const rockets = useSelector((state) => state.rockets.rockets).filter(
    (rocket) => rocket.reserved,
  );
  const { missions } = useSelector((state) => state.missions);
  const missionJoined = missions.filter((mission) => mission.join);

  return (
    <section className="profile-section">
      <div>
        <h2>My Mission</h2>
        {missionJoined.length > 0 ? (
          <ul className="rocket-reserved-list">
            {missionJoined.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        ) : (
          <p className="notJoined">There is no joined mission.</p>
        )}
      </div>
      <div>
        <h2>My Rockets</h2>
        {rockets.length > 0 ? (
          <ul className="rocket-reserved-list">
            {rockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        ) : (
          <p className="notJoined">There is no reserved rocket.</p>
        )}
      </div>
    </section>
  );
}

export default Profle;
