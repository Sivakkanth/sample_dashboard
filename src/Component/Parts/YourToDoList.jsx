import React, {useState} from 'react';
import { TfiTicket } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { PiClipboardTextLight } from "react-icons/pi";
import { LiaClipboardCheckSolid } from "react-icons/lia";

const YourToDoList = () => {
  const [data, setData] = useState([
    { icon:<TfiTicket class="w-full h-full"/>, name: 'Run payroll', description: "Mar 4 at 6.00 pm" },
    { icon:<IoMdTime class="w-full h-full"/>, name: 'Review time off request', description: "Mar 7 at 6.00pm"},
    { icon:<PiClipboardTextLight class="w-full h-full"/>, name: 'Sign board resolution', description: "Mar 12 at 6.00 pm"},
    { icon:<LiaClipboardCheckSolid class="w-full h-full"/>, name: 'Finish onboarding Tany', description: "Mar 12 at 6.00 pm"},
  ]);
  return (
    <div class="w-[90%] h-[200px] px-1 mx-5 rounded-[30px]">
      <p class="text-lg font-semibold text-left">Your to-Do list</p>
      <div class="w-full h-[185px] overflow-auto text-sm text-left text-[#3A474D] bg-transparent">
        <table>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} class="w-full">
                <td class="w-[30px] h-[30px] ">
                  <div class="w-[30px] h-[30px] text-white px-[5px] rounded-[10px] bg-black">
                      {item.icon}
                  </div>
                </td>
                <td class="px-2 py-1 text-nowrap">
                  <div class="">
                    <p class="text-[12px] leading-normal font-bold">{item.name}</p>
                    <p class="text-[12px] font-normal">{item.description}</p>
                  </div>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default YourToDoList;