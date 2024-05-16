import React from 'react';
import NavBarButtons from '../Smallparts/NavBarButtons';
import { MdOutlineDateRange } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import user from "../../Assets/Picture/user.png"

const NavBar = () => {
  return (
    <div class="w-full h-[50px] p-5 flex flex-row items-center justify-between">
        <div class="flex flex-row flex-nowrap items-center">
            <p class="text-[25px] font-bold pr-3">Good Morning,</p>
            <p class="text-[25px] font-bold">James!</p>
        </div>
        <div class="flex flex-row flex-center flex-nowrap items-center">
            <NavBarButtons IconName={<MdOutlineDateRange class="w-full h-full"/>}/>
            <NavBarButtons IconName={<TbMessageDots class="w-full h-full"/>}/>
            <NavBarButtons IconName={<IoMdNotificationsOutline class="w-full h-full"/>}/>
            <div class="w-[40px] h-[40px] p-[5px] rounded-[25px] bg-gray-300">
                <img src={user} alt='ProfilePicture'/>
            </div>
            <NavBarButtons IconName={<IoIosArrowDown class="w-full h-full"/>}/>
        </div>
    </div>
  );
}

export default NavBar;