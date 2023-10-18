import React from 'react';
import UserDiv from './Components/UserDiv';
import { users } from './Components/Users';
import SideToSideGrid from './Components/SideToSideGrid';

const App = () => {
  return (
    <div className="bg-[#ecf2f8] p-5 min-w-[280px] w-full flex justify-center items-center min-h-screen">
      <div className="max-w-[1100px] flex flex-col lg:flex-row gap-7">
        <div className="flex flex-col gap-5">
          <SideToSideGrid
            direction={'lg:flex-row'}
            mobDirection={'flex-col'}
            user1={users[0]}
            user2={users[1]}
          />
          <SideToSideGrid
            direction={'lg:flex-row-reverse'}
            mobDirection={'flex-col-reverse'}
            user1={users[3]}
            user2={users[2]}
          />
        </div>
        <UserDiv user={users[4]} />
      </div>
    </div>
  );
};

export default App;
