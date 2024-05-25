import React from 'react';

const FormationStatus = () => {
  return (
    <div class="w-[90%] h-[200px] bg-black mx-5 my-3 rounded-[30px] flex flex-col items-center justify-evenly px-10 py-3">
      <div class="flex flex-col items-center w-full">
        <p class="text-white text-left text-[14px] min-[350px]:text-lg font-bold w-full">Formation status</p>
        <p class="text-white text-[10px] min-[350px]:text-[12px] text-left font-normal w-full">In progress</p>
      </div>
      <div class="h-[15px] bg-[#404040] w-full rounded-[7.5px]">
        <div class={`h-[15px] bg-[#DFECF2] w-[75%] rounded-[7.5px]`}></div>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-white text-[10px] min-[350px]:text-[12px] font-bold">Estimated processing</p>
        <p class="text-white text-[10px] min-[350px]:text-[12px] font-normal">4-5 business days</p>
      </div>
      <button class="w-full h-[30px] rounded-[7.5px] font-bold bg-[#DFECF2] hover:bg-blue-200">View status</button>
    </div>
  );
}

export default FormationStatus;