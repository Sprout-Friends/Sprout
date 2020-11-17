import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './tailwind.css';
import { UserContext } from './UserContext';

ReactDOM.render(<App />, document.getElementById('root'));

export function Index() {
  const { user, setUser } = useContext(UserContext);
}
