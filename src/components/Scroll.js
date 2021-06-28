import React from 'react';

const Scroll = (props) => {
  //   console.log(props);
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px dashed black',
        height: '600px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
