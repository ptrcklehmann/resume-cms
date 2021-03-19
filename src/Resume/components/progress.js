import React from 'react';

const Progress = ({ percent, name }) => (
  <div className="shadow w-full bg-white rounded overflow-hidden mb-2">
    <div
      className="bg-lime text-sm py-1 text-black font-light"
      style={{ width: `${percent}%` }}
    >
      <span className="pl-2">{name}</span>
    </div>
  </div>
);

export default Progress;
