
import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Profile from './components/Profile';
import { ContextProvider } from './context/UserContext';

// redeploying

const App = () => {
  return (
      <div className="flex sm:block sm:px-5 sm:py-10 sm:w-screen justify-center items-center h-screen bg-app-light transition-all duration-300 dark:bg-app-dark">
        <div className="flex flex-col w-2/3 sm:w-full max-w-750">
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
