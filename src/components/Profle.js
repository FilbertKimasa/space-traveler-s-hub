import React from 'react';
import { useSelector } from 'react-redux';

function Profle() {
  // eslint-disable-next-line no-unused-vars
  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <section className="profile-section">
      <div>My Mission</div>
      <div>My Rockets</div>
    </section>
  );
}

export default Profle;
