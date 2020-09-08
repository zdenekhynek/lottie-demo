import React from 'react';

function Background({ isOn=false }) {
  const opacity = isOn? 0.1: 0.02;
  const style = {
    fill: `rgba(0,0,255,${opacity})`,
    transition: '1s all',
  };

  console.log(style);

  return (
    <svg width="400" height="450">
      <rect width="400" height="450" style={style} />
    </svg>
  );
}

export default Background;
