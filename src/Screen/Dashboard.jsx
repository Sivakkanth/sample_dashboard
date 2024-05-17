import React, { useState } from 'react'
import SideBar from '../Component/Parts/SideBar'
import Home from './Home'

const Dashboard = () => {
  const [openWindow, setOpenWindow] = useState(0)
  return (
    <div class='w-screen h-screen p-3'>
        <div class='w-full h-[95%] p-5 rounded-[20px] bg-[#DFECF2] flex flex-row flex-nowrap justify-stretch items-center'>
            <SideBar index={openWindow} setIndex={setOpenWindow}/>
            <div class="w-full h-full">
                {openWindow===0 && <Home/>}
            </div> 
        </div>
    </div>
  )
}

export default Dashboard