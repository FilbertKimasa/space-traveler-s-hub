import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RocketItem.css';

function RocketItem({ itemProp }) {
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
          <p>{itemProp.description}</p>
          <button className="reserve-btn" type="button">
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
