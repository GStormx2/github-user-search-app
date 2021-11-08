
import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-app-light dark:bg-app-dark">
      <div className="flex flex-col border border-red-500 w-2/3 max-w-750">
        <Header></Header>
        <Search></Search>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
