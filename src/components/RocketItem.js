import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../redux/rockets/rocketsSlice';
import '../styles/RocketItem.css';

function RocketItem({ itemProp }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className="rocket-item">
        <img
          src={itemProp.flickr_images[0]}
          alt="rocket"
          className="rocket-img"
        />
        <span className="display-flex rocket-info">
          <h2>{itemProp.name}</h2>
          <p>
            <span className="reserved-label">Recerved</span>
            {itemProp.description}
          </p>
          <button
            className="reserve-btn"
            type="button"
            onClick={() => dispatch(bookRocket({ id: itemProp.id }))}
          >
            Reserve Rocket
          </button>
        </span>
      </li>
    </>
  );
}

RocketItem.propTypes = {
  itemProp: PropTypes.objectOf(
    PropTypes.shape({
      flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      itemProp: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RocketItem;
