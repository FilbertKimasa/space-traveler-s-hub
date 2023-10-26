import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMission } from '../Redux/Mission/MissionSlice';
import '../styles/Mission.css';

function MissionList() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        error:
        {error}
      </div>
    );
  }

  return (
    <div className="item-container">
      <div className="head-list">
        <ul className="mission-info">
          <li>Mission</li>
          <li>Description</li>
          <li>Status</li>

        </ul>
      </div>
      <div className="missions">
        {missions.map((mission) => (
          <div key={mission.mission_id} className="mission-item">
            <div className="mission-name">{mission.mission_name}</div>
            <div className="mission-description">
              <p>{mission.description}</p>
            </div>
            
            <button type="button">Not a member</button>
            <button type="button">Join Mission</button>
                                                    

          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionList;
