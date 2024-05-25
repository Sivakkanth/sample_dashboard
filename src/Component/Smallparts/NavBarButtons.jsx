import React from 'react';

const NavBarButtons = ({IconName, handleWindow, isOpen}) => {
  return (
    <div onClick={handleWindow} 
         class={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] p-[2.5px] rounded-[10px] text-black mx-1 md:mx-2 hover:bg-blue-200 cursor-pointer`}>
      {IconName}
    </div>
  );
}

export default NavBarButtons;
