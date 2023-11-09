import React, { useState } from 'react';


const HomeClean = () => {


  let [showHeader, funcToChange] = useState(false);
  let [str, setStr] = useState('B49WEENG with 15 students');

  const handleClick = () => {
    if (showHeader === false) {
      funcToChange(true);
      setStr('Something Different');
    } else {
      funcToChange(false);
      setStr('B49WEENG with 15 students');
    }
  };

  return (
    <div>
      STR: {str}
      {showHeader && <h1 style={{ backgroundColor: 'aqua' }} >Header</h1>}
      {showHeader ? <h3>Header Visible</h3> : <h2>Header Not Visble</h2>}
      <button
        onClick={handleClick}
      >{showHeader ? 'Hide' : 'Show'} Header</button>
    </div>
  );
};


export default HomeClean;