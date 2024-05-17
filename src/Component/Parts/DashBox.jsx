import React from 'react';
import Box from '../Smallparts/Box';
import { CiWallet } from "react-icons/ci";
import { LuPieChart } from "react-icons/lu";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { TbCreditCardRefund } from "react-icons/tb";

const DashBox = () => {
  return (
    <div class="w-full h-auto flex flex-wrap flex-row items-center justify-evenly md:justify-between">
      <Box Icon={<CiWallet class="w-full h-full"/>} Balance={"$143,624"} Description={"Your bank balance"}/>
      <Box Icon={<LuPieChart class="w-full h-full"/>} Balance={"12"} Description={"Uncategorized transaction"}/>
      <Box Icon={<LiaBusinessTimeSolid class="w-full h-full"/>} Balance={"7"} Description={"Employees working today"}/>
      <Box Icon={<TbCreditCardRefund class="w-full h-full"/>} Balance={"$3,287.49"} Description={"This week's card spending"}/>
    </div>
  );
}

export default DashBox;
