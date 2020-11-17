import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Camera, Chat, User } from 'heroicons-react';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-around border-t-2">
          <li className="inline-block">
            <Link to="/" className="text-green-600 hover:text-green-700 m-2">
              <Home />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="search"
              className="text-green-600 hover:text-green-700 m-2"
            >
              <Search />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="gallery"
              className="text-green-600 hover:text-green-700 m-2"
            >
              <Camera />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="message"
              className="text-green-600 hover:text-green-700 m-2"
            >
              <Chat />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="profile"
              className="text-green-600 hover:text-green-700 m-2"
            >
              <User />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
