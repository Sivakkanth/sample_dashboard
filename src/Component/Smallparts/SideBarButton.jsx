import React from 'react';

const SideBarButton = ({IconName, handleWindow, isOpen}) => {
  return (
    <div onClick={handleWindow} 
         class={`w-full bg-transparent text-white border-l-4 border-transparent py-1.5 my-1.5 active:border-white ${isOpen ? 'border-white' : ''} hover:cursor-pointer`}>
      {IconName}
    </div>
  );
}

export default SideBarButton;