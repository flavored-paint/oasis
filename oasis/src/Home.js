import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
          <title> EXPLOREBOS </title>
          <div className="titleBody">
            <h1 style={{ fontSize: "380%" }} className="centered">
              {" "}
              ExploreBOS{" "}
            </h1>
            <p style={{ fontSize: "200%" }} className="centered">
              Generate a place in Boston!
            </p>
          </div>
          <div className="leftCenter">
            <button className="button button1"><Link to={{pathname: '/Random'}}>Surprise Me (Random)</Link></button>
          </div>
          <div className="rightCenter">
            <button className="button button1"> I Have Ideas (Filter) </button>
          </div>
      </div>
  );
};
  
export default Home;
