import React from 'react';

const InformationBox = ({backColor, textColor, percentage, count, title}) => {
  return (
    <div class="w-full h-full bg-[#D0E1E9] rounded-[30px] px-4 py-3 mb-2">
        <p class="text-lg font-semibold text-left">{title}</p>
        <div class="w-full flex flex-row items-center justify-evenly">
            <p class="text-5xl font-bold">{count}</p>
            <p class={`px-1 mx-2 rounded-[5px] text-center text-[15px] ${backColor} ${textColor} font-normal leading-tight`}>{percentage}%</p>
        </div>
    </div>
  );
}

export default InformationBox;
