import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {
  fetchMission, joinMission,
} from '../redux/missions/missionSlice';
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
  // const handleJoinMission = (missionId) => {
  //   dispatch(joinMission(missionId));
  // };

  // const handleLeaveMission = (missionId) => {
  //   dispatch(leaveMission(missionId));
  // };
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
          {missions.map((mission) => {
            /* eslint-disable camelcase */

            const { id, join } = mission;
            return (
            /* eslint-disable camelcase */

              <tr key={id} className="mission-item">
                <td className="mission-name">{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td className="status">
                  <button
                    type="button"
                    className={`${join ? 'activeMember' : 'notMember'} memberBtn`}
                    aria-label={join ? 'Active Member' : 'Not a Member'}
                  >
                    {join ? 'Active Member' : 'Not a Member'}
                  </button>
                </td>
                <td className="status">
                  <button
                    type="button"
                    className={`leaveBtn ${join ? 'joined' : 'notJoined'}`}
                    aria-label={join ? 'Leave Mission' : 'Join Mission'}
                    onClick={() => dispatch(joinMission({ mission_id: id }))}
                  >
                    {join ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MissionList;
