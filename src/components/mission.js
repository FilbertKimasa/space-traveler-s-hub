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
                <button type="button">Not a member</button>
              </td>
              <td className="status">
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionList;
