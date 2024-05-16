import React from 'react';

const NavBarButtons = ({IconName, handleWindow, isOpen}) => {
  return (
    <div onClick={handleWindow} 
         class={`w-[25px] h-[25px] p-[2.5px] rounded-[10px] text-black mx-2 hover:bg-blue-200 cursor-pointer`}>
      {IconName}
    </div>
  );
}

export default NavBarButtons;
