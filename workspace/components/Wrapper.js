import React from 'react';

const Wrapper = ({children, styles = {}}) => {
  return (
    <div style={{...styles, position: 'relative', display: 'flex', margin: 4}}>
      {children}
    </div>
  );
};

export default Wrapper;
