import React, { createContext, useState } from 'react';

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    _id: null,
    email: null,
    first_name: null,
    last_name: null,
  });

  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
