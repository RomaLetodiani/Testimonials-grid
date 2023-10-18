import React from 'react';
import UserDiv from './UserDiv';

const SideToSideGrid = (props) => {
  return (
    <div className={`flex ${props.mobDirection} gap-7 ${props.direction}`}>
      <UserDiv user={props.user1} />
      <UserDiv user={props.user2} />
    </div>
  );
};

export default SideToSideGrid;
