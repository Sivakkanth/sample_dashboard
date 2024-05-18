import React, {useState} from 'react';
import user from "../../Assets/Picture/user.png"

const RecentEmailTable = () => {
    const [data, setData] = useState([
        { name: 'Hannah Morgan', description: "Meeting Scheduled", date: "1:24 PM" },
        { name: 'Megan Clark', description: "Update on marketing campaign", date: "12:32 PM" },
        { name: 'Brandon Williams', description: "Designly 2.0 is about to launch", date: "Yesterday at 8:57 PM" },
        { name: 'Reid Smith', description: "My friend Julie loves Dappr!", date: "Yesterday at 8:49 PM" },
      ]);
  return (
    <div class="w-[95%] sm:w-[98%] h-[180px] relative bg-[#D0E1E9] rounded-[30px] px-3 sm:px-5 py-3 mx-1 sm:mx-3 mt-3 min-[700px]:mt-5">
      <p class="text-lg font-semibold text-left">Recent emails</p>
      <div class="w-full h-[130px] overflow-auto text-sm text-left text-[#3A474D] bg-transparent">
        <table>
            <tbody>
            {data.map((item, index) => (
                <tr key={index} class="w-full">
                    <td class="px-1 sm:px-3 w-[10px]">
                        <div class="w-[30px] h-[30px] p-[5px] rounded-[25px] bg-gray-300">
                            <img src={user} alt='ProfilePicture'/>
                        </div>
                    </td>
                    <td class="px-3 py-3 w-[30%] text-nowrap">
                        <p class="text-[13px] font-normal">{item.name}</p>
                    </td>
                    <td class="px-3 py-3 w-[100%]">
                        <p class="text-[13px] font-normal">{item.description}</p>
                    </td>
                    <td class="px-3 py-3 w-[50%] text-nowrap">
                        <p class="text-[13px] font-normal text-right">{item.date}</p>
                    </td>
                </tr>))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentEmailTable;