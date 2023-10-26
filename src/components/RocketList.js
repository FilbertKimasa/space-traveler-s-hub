import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketItem from './RocketItem';

function RocketList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <ul>
      {rockets.map((rocket) => (
        <RocketItem key={rocket.id} itemProp={rocket} />
      ))}
    </ul>
  );
}

export default RocketList;
