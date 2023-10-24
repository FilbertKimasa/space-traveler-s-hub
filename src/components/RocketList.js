import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function RocketList() {
  const dispatch = useDispatch();
  // const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return <></>;
}

export default RocketList;
