
import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Profile from './components/Profile';
import { ContextProvider } from './context/UserContext';

const App = () => {
  return (
      <div className="flex justify-center items-center h-screen bg-app-light dark:bg-app-dark">
        <div className="flex flex-col w-2/3 max-w-750">
          <ContextProvider>
            <Header></Header>
            <Search></Search>
            <Profile></Profile>
          </ContextProvider>
        </div>
      </div>
  );
}

export default App;
