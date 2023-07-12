import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Trains Schedule Info</h1>
      <Link to='/all-trains'>All Trains</Link>
      &nbsp;&nbsp;&nbsp;
{/*       <Link to='/single-train'>Single Train</Link> */}
    </div>
  );
};

export default HomePage;
