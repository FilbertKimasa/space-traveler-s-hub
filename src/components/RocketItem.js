/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/RocketItem.css';

function RocketItem({ itemProp }) {
  return (
    <>
      <li className="display-flex rocket-item">
        <img
          src={itemProp.flickr_images[0]}
          alt="rocket"
          className="rocket-img"
        />
        <span>
          <h2>{itemProp.name}</h2>
          <p>{itemProp.description}</p>
          <button>Reserve Rocket</button>
        </span>
      </li>
    </>
  );
}

export default RocketItem;
