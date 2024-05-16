import React from 'react';
import NavBar from '../Component/Parts/NavBar';

const Home = () => {
  return (
    <div class="h-full w-full flex flex-col items-center justify-stretch">
        <NavBar/>
        <div>
            <div>
                Dashboard content
            </div>
            <div>
                Formatting Status, Your to-Do list, and Board Meeting
            </div>
        </div>
    </div>
  );
}

export default Home;