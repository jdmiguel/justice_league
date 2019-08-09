import React from 'react';

export default ({
  math: {
    params: { id }
  }
}) => (
  <div className="character-container">
    <p>ESTE ES EL CHARACTER: {id}</p>
  </div>
);
