import React from 'react';
import NavBar from '../Component/Parts/NavBar';
import DashBox from '../Component/Parts/DashBox';
import RecentEmailTable from '../Component/Parts/RecentEmailTable';
import FormationStatus from '../Component/Parts/FormationStatus';
import YourToDoList from '../Component/Parts/YourToDoList';
import BoardMeeting from '../Component/Parts/BoardMeeting';
import InformationBox from '../Component/Smallparts/InformationBox';
import Revenue from '../Component/Parts/Revenue';

const Home = () => {
  return (
    <div class="h-full w-full flex flex-col items-center justify-stretch">
        <NavBar/>
        <div class="w-full overflow-y-auto lg:overflow-y-visible h-screen flex flex-row flex-wrap items-stretch justify-stretch px-1 sm:px-3">
          <div class="w-full lg:w-[70%] h-auto sm:px-3">
            <DashBox/>
            <div class="w-full min-[700px]:h-[220px] relative flex flex-row flex-wrap items-stretch justify-between">
              <div class="w-full min-[700px]:w-[27%] min-[700px]:h-full flex flex-col min-[400px]:flex-row min-[700px]:flex-col items-center justify-between m-2">
                <InformationBox title={"New clients"} count={54} percentage={"+18.7"} backColor={"bg-[#BBD6CD]"} textColor={"text-[#477545]"}/>
                <InformationBox title={"Invoices overdue"} count={6} percentage={"+2.7"} backColor={"bg-[#D8BCC9]"} textColor={"text-[#78182F]"}/>
              </div>
              <div class="w-full min-[700px]:w-[65%] h-full bg-[#D0E1E9] rounded-[30px] px-5 py-3 m-2 flex flex-col items-center justify-stretch min-[700px]:flex-row min-[700px]:flex-wrap">
                <div class="w-full flex flex-row items-center justify-between p-0">
                  <p class="text-lg font-semibold text-left">Revenue</p>
                  <p class="px-2 rounded-[5px] text-center text-[14px] font-normal leading-tight">Last 7 days vs prior week</p>
                </div>
                <Revenue/>
              </div>
            </div>
            <RecentEmailTable/>
          </div>
          <div class="w-full lg:w-[30%] h-[95%] flex flex-row flex-wrap items-center justify-evenly lg:flex-col">
            <FormationStatus/>
            <YourToDoList/>
            <BoardMeeting/>
          </div>
        </div>
    </div>
  );
}

export default Home;