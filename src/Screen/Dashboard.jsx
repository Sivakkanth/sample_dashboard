import React, { useState } from 'react'
import SideBar from '../Component/Parts/SideBar'
import Home from './Home'

const Dashboard = () => {
  const [openWindow, setOpenWindow] = useState(0)
  return (
    <div class='w-screen h-screen p-3'>
      <div class='w-full h-[98%] lg:h-[95%] p-1 sm:p-5 rounded-[20px] bg-[#DFECF2] flex flex-row flex-nowrap justify-stretch items-center'>
        <SideBar index={openWindow} setIndex={setOpenWindow}/>
        <div class="w-[85%] min-[350px]:w-[90%] md:w-[95%] lg:w-[95%] h-full">
            {openWindow===0 && <Home/>}
        </div> 
        </div>
    </div>
  )
}

export default Dashboard