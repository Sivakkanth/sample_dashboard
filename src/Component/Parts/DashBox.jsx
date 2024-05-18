import React, {useRef, useState} from 'react';
import Box from '../Smallparts/Box';
import { CiWallet } from "react-icons/ci";
import { LuPieChart } from "react-icons/lu";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { TbCreditCardRefund } from "react-icons/tb";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const DashBox = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <div class="w-full h-[180px] px-3 sm:px-0 flex flex-col items-center justify-stretch">
      <div class="w-full h-[25px] flex flex-row items-center justify-end sm:mr-10">
        <GrFormPrevious class="h-full mx-3 hover:bg-blue-200 cursor-pointer rounded-[12.5px]" onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 225, -10);
          }}
          disabled={arrowDisable}/>
        <GrFormNext  class="h-full mr-5 sm:mr-10 hover:bg-blue-200 cursor-pointer rounded-[12.5px]" onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 225, 10);
          }}/>
      </div>
      <div class="w-full h-full overflow-hidden flex" ref={elementRef}>
        <Box Icon={<CiWallet class="w-full h-full"/>} Balance={"$143,624"} Description={"Your bank balance"}/>
        <Box Icon={<LuPieChart class="w-full h-full"/>} Balance={"12"} Description={"Uncategorized transaction"}/>
        <Box Icon={<LiaBusinessTimeSolid class="w-full h-full"/>} Balance={"7"} Description={"Employees working today"}/>
        <Box Icon={<TbCreditCardRefund class="w-full h-full"/>} Balance={"$3,287.49"} Description={"This week's card spending"}/>
        <Box Icon={<LiaBusinessTimeSolid class="w-full h-full"/>} Balance={"7"} Description={"Employees working today"}/>
        <Box Icon={<TbCreditCardRefund class="w-full h-full"/>} Balance={"$3,287.49"} Description={"This week's card spending"}/>
        <Box Icon={<LiaBusinessTimeSolid class="w-full h-full"/>} Balance={"7"} Description={"Employees working today"}/>
        <Box Icon={<TbCreditCardRefund class="w-full h-full"/>} Balance={"$3,287.49"} Description={"This week's card spending"}/>
        </div>
    </div>
  );
}

export default DashBox;