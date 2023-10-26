import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
// eslint-disable-next-line no-unused-vars
import RocketItem from './RocketItem';

function RocketList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  // eslint-disable-next-line no-unused-vars
  const rockets = useSelector((state) => state.rockets.rockets);
  // console.log(rockets);
  return (
    <>
      {/* <RocketItem key={book.item_id} itemProp={book} />; */}
      <ul>
        {rockets.map((rocket) => (
          <RocketItem key={rocket.id} itemProp={rocket} />
        ))}
      </ul>
    </>
  );
}

export default RocketList;
