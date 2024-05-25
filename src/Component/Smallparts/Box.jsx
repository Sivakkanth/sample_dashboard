import React from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";

const Box = ({Icon, Balance, Description}) => {
  return (
    <div class="w-auto h-[150px] rounded-[30px] px-4 py-2 mx-3 bg-[#D0E1E9] flex flex-col items-start justify-evenly">
      <div class="w-[170px] flex flex-row items-start justify-between">
        <div class="w-[45px] h-[45px] text-black">{Icon}</div>
        <div class="w-[25px] h-[25px] p-[2.5px] rounded-[15px] text-black mx-2 hover:bg-black hover:text-white cursor-pointer"><HiOutlineDotsVertical class="w-full h-full"/></div>
      </div>
      <p class="text-2xl font-bold text-left">{Balance}</p>
      <p class="pr-7 text-left text-[15px] font-normal leading-tight">{Description}</p>
    </div>
  );
}

export default Box;