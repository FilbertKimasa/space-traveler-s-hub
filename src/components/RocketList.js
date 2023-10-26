import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function RocketList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return <></>;
}

export default RocketList;
