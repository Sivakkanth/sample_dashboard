import React from 'react';
import SideBarButton from '../Smallparts/SideBarButton';
import { IoHomeOutline } from "react-icons/io5";
import { MdInsertChartOutlined } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { TbHexagonLetterD } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiDollarCircle } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";

const SideBar = ({index, setIndex}) => {
  const handleWindowIndex = (menuIndex) => {
    setIndex(index === menuIndex ? 0:menuIndex);
  }
  return (
    <div class="bg-black h-[90vh] pl-0 pr-1 mx-0 sm:mx-1 rounded-[15px] w-[70px] flex flex-col items-center justify-between">
        <div class="w-full py-[10px] h-full overflow-y-auto overflow-x-hidden flex flex-col flex-start items-center">
          <p class="text-white text-center font-bold pt-[70%]">dappr</p>
          <div class="rounded-[10px] w-[150%] h-[20px] py-[50%] flex flex-row items-center justify-end">
            <div class="absolute shadow-[rgba(0,0,15,0.2)_0px_10px_5px_0px] rounded-[10px] z-10 w-[20px] h-[20px] bg-white hover:bg-blue-200 cursor-pointer">
              <GrFormNext  class="h-full w-full"/>
            </div>
          </div>
          <SideBarButton isOpen={index===0} handleWindow={() => handleWindowIndex(0)} IconName={<IoHomeOutline class="size-5 w-full"/>}/>
          <SideBarButton isOpen={index===1} handleWindow={() => handleWindowIndex(1)} IconName={<MdInsertChartOutlined class="size-5 w-full"/>}/>
          <SideBarButton isOpen={index===2} handleWindow={() => handleWindowIndex(2)} IconName={<BsBank class="size-5 w-full"/>}/>
          <SideBarButton isOpen={index===3} handleWindow={() => handleWindowIndex(3)} IconName={<FaRegEnvelope class="size-5 w-full"/>}/>
          <SideBarButton isOpen={index===4} handleWindow={() => handleWindowIndex(4)} IconName={<TbHexagonLetterD class="size-5 w-full"/>}/>
          <SideBarButton isOpen={index===5} handleWindow={() => handleWindowIndex(5)} IconName={<TbUsersGroup class="size-5 w-full"/>}/>
          <SideBarButton isOpen={index===6} handleWindow={() => handleWindowIndex(6)} IconName={<IoDocumentTextOutline class="size-5 w-full"/>}/>
          <SideBarButton isOpen={index===7} handleWindow={() => handleWindowIndex(7)} IconName={<BiDollarCircle class="size-5 w-full"/>}/>
        </div>
        <div class="w-full mb-[40px]">
            <SideBarButton isOpen={index===8} handleWindow={() => handleWindowIndex(8)} IconName={<MdOutlineSettings class="size-5 w-full"/>}/>
        </div>
    </div>
  );
}

export default SideBar;