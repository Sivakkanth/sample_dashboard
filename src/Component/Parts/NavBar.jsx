import React from 'react';
import NavBarButtons from '../Smallparts/NavBarButtons';
import { MdOutlineDateRange } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import user from "../../Assets/Picture/user.png"

const NavBar = () => {
  return (
    <div class="w-full h-[50px] pl-3 py-3 flex flex-row items-center justify-between">
        <div class="flex flex-row flex-nowrap items-center">
            <p class="hidden min-[350px]:block sm:text-[15px] md:text-[20px] lg:text-[25px] font-bold pr-0 sm:pr-3">Good Morning,</p>
            <p class="sm:text-[15px] md:text-[20px] lg:text-[25px] font-bold">James!</p>
        </div>
        <div class="flex flex-row flex-center flex-nowrap items-center px-0 lg:mr-9">
            <NavBarButtons IconName={<MdOutlineDateRange class="w-full h-full"/>}/>
            <NavBarButtons IconName={<TbMessageDots class="w-full h-full"/>}/>
            <NavBarButtons IconName={<IoMdNotificationsOutline class="w-full h-full"/>}/>
            <div class="w-[40px] h-[40px] p-[5px] rounded-[25px] bg-gray-300 hover:bg-blue-200 cursor-pointer ">
                <img src={user} alt='ProfilePicture'/>
            </div>
            <NavBarButtons IconName={<IoIosArrowDown class="w-full h-full"/>}/>
        </div>
    </div>
  );
}

export default NavBar;