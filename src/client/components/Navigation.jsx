import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="dashboard">{/* add home icon */}</Link>
          </li>
          <li>
            <Link to="search">{/* add search icon */}</Link>
          </li>
          <li>
            <Link to="">
              Camera
              {/* add camera icon */}
            </Link>
          </li>
          <li>
            <Link to="message">{/* add message icon */}</Link>
          </li>
          <li>
            <Link to="profile">{/* add profile icon */}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
