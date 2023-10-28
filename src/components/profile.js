import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { missions } = useSelector((state) => state.missions);
  const missionJoined = missions.filter((mission) => mission.join);

  return (
    <section className="Profile-section">
      <div className="p-mission">
        <h2>My Missions</h2>
        { missionJoined.length > 0 ? (
          <div className="p-list">
            {
                  missionJoined.map((mission) => (
                    <p
                      key={mission.mission_id}
                      className="profile-list"
                    >
                      {mission.mission_name}
                    </p>
                  ))
              }
          </div>
        ) : <p className="notJoined">There is no joined mission.</p>}
      </div>
    </section>
  );
}

export default Profile;
