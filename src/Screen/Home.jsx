import React from 'react';
import NavBar from '../Component/Parts/NavBar';
import DashBox from '../Component/Parts/DashBox';
import RecentEmailTable from '../Component/Parts/RecentEmailTable';
import FormationStatus from '../Component/Parts/FormationStatus';
import YourToDoList from '../Component/Parts/YourToDoList';
import BoardMeeting from '../Component/Parts/BoardMeeting';
import InformationBox from '../Component/Smallparts/InformationBox';

const Home = () => {
  return (
    <div class="h-full w-full flex flex-col items-center justify-stretch">
        <NavBar/>
        <div class="w-full overflow-y-auto lg:overflow-y-visible h-screen flex flex-row flex-wrap items-stretch justify-stretch p-3">
          <div class="w-full lg:w-[70%] h-auto">
            <DashBox/>
            <div class="w-full h-[220px] flex flex-row flex-wrap items-stretch justify-between">
              <div class="w-[25%] h-full flex flex-col items-center justify-between m-2">
                <InformationBox title={"New clients"} count={54} percentage={"+18.7"} backColor={"bg-[#BBD6CD]"} textColor={"text-[#477545]"}/>
                <InformationBox title={"Invoices overdue"} count={6} percentage={"+2.7"} backColor={"bg-[#D8BCC9]"} textColor={"text-[#78182F]"}/>
              </div>
              <div class="w-[69%] h-full bg-[#D0E1E9] rounded-[30px] px-5 py-3 m-2">
                <div class="w-full flex flex-row items-center justify-between">
                  <p class="text-lg font-semibold text-left">Revenue</p>
                  <p class="px-2 rounded-[5px] text-center text-[14px] font-normal leading-tight">Last 7 days VS prior week</p>
                </div>

              </div>
            </div>
            <RecentEmailTable/>
          </div>
          <div class="w-full lg:w-[30%] h-auto flex flex-row flex-between flex-wrap items-center justfy-stretch lg:flex lg:flex-col lg:items-center justfy-stretch">
            <FormationStatus/>
            <YourToDoList/>
            <BoardMeeting/>
          </div>
        </div>
    </div>
  );
}

export default Home;