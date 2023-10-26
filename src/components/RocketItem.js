/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React from 'react';

function RocketItem({ itemProp }) {
  return (
    <>
      <li>
        <img src={itemProp.flickr_images[0]} alt="rocket" />
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
