import React, {useState, useEffect} from 'react';

const BoardMeeting = () => {
  const [today,setToday] = useState(new Date());
  const month = today.toLocaleString('default', { month: 'short' });
  const date = today.getDate();
  const time = today.getHours();
  const minute = today.getMinutes();
  const [hour, setHour] = useState(`${time}`);
  const [ampm, setAmPM] = useState("am");
  useEffect(() => {
      var timer = setInterval(()=>setToday(new Date()), 1000 )
      if(time>=12){
        if(time>12){
          setHour(time -12);
        }
        setAmPM("pm");
      }
      else{
        if(time===0){
          setHour(12)
        }
        else{
          setHour(time);
        }
      }
      return function cleanup() {
          clearInterval(timer)
      }
  }, [time]);
  return (
    <div class="w-[85%] h-[100px] bg-black m-5 rounded-[30px] p-3 flex flex-row flex-nowrap items-start">
      <div class="w-[8px] h-[8px] rounded-[5px] bg-[#75C65F] mt-6 mx-2"></div>
      <div class="flex flex-col items-start">
        <p class="text-[15px] font-semibold text-white">Board Meeting</p>
        <p class="text-[13px] py-[3px] text-[#BEBEBE]">{month} {date} at {hour}:{minute} {ampm}</p>
        <p class="text-[10px] min-[350px]:text-[12px] leading-tight text-[#8C8C8C]">You have been invited to attend to meeting of the Board Directors</p>
      </div>
    </div>
  );
}

export default BoardMeeting;