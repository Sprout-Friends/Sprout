import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Camera, Chat, User } from 'heroicons-react';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-around border-t-2">
          <li className="inline-block">
            <Link to="/" className="m-2 text-green-600 hover:text-green-700">
              <Home />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="search"
              className="m-2 text-green-600 hover:text-green-700"
            >
              <Search />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="camera"
              className="m-2 text-green-600 hover:text-green-700"
            >
              <Camera />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="message"
              className="m-2 text-green-600 hover:text-green-700"
            >
              <Chat />
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="account"
              className="m-2 text-green-600 hover:text-green-700"
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
