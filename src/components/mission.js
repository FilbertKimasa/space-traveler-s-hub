import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMission } from '../redux/missions/missionSlice';
import '../styles/Mission.css';
import {joinMission,leaveMission} from '../redux/missions/missionSlice';

function MissionList() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <p className="loading">Loading...</p>
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
      <table className="M-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="mission-item">
              <td className="mission-name">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="status">
                <button type="button" onClick={() => dispatch(leaveMission(mission.id))}>Not a member</button>
              </td>
              <td className="status">
                <button type="button" onClick={() => dispatch(joinMission(mission.id))}>Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionList;
