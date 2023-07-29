import React from "react";
import { Link } from "react-router-dom";
import "./HomeButton.scss";

const HomeButton = () => {
  return (
    <div className='home-button'>
      <Link to={`/`}>
        <span className='return-button'>Back to Home</span>
      </Link>
    </div>
  );
};

export default HomeButton;
