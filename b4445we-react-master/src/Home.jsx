import React, { useState } from 'react';


const Home = () => {

  // Executes only Once during a refresh of the screen
  // let showHeader = false; // behaves like constant in the render area
  // let str = 'B49WEENG with 15 students';

  // state varaibles ---> changing below values will lead to re-render
  let [showHeader, funcToChange] = useState(false);
  let [str, setStr] = useState('B49WEENG with 15 students');

  const handleClick = () => { // fixed
    console.log('value before clicking', showHeader, str);
    if (showHeader === false) {
      // showHeader = true; // no influence in the render
      funcToChange(true); // we change the state from false to true, causes a re-render
      // str = "Something Different"
      setStr('Something Different');
    } else {
      funcToChange(false); // we change the state from false to true, causes a re-render
      // str = "Something Different"
      setStr('B49WEENG with 15 students');
    }

    console.log('value after clicking', showHeader, str);
  };

  // render area ---> only once per refresh
  // re-render ---> takes the updated values of the variables in js
  return (
    <div>
      {console.log(showHeader)}
      STR: {str}
      {/* Conditional Rendering */}
      {showHeader && <h1 style={{ backgroundColor: 'aqua' }} >Header</h1>}
      {/* Rendering using ternary operator */}
      {showHeader ? <h3>Header Visible</h3> : <h2>Header Not Visble</h2>}
      <button
        onClick={handleClick}
      >{showHeader ? 'Hide' : 'Show'} Header</button>
    </div>
  );
};


export default Home;