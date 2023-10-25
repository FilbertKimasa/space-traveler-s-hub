import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMission } from '../Redux/Mission/MissionSlice';

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
    <div>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MissionList;
