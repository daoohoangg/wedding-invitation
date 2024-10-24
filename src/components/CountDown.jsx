import React, { useState, useEffect } from 'react';
import './css/style.css';
function CountDown(){
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        // Xác định ngày đích (10/11)
        const targetDate = new Date('2024-11-10T00:00:00').getTime();
    
        // Hàm cập nhật thời gian đếm ngược
        const updateCountdown = () => {
          const now = new Date().getTime();
          const timeDifference = targetDate - now;
    
          if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
          } else {
            // Nếu đếm ngược hoàn thành, đặt tất cả giá trị về 0
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        };
    
        // Cập nhật bộ đếm ngược mỗi giây
        const intervalId = setInterval(updateCountdown, 1000);
    
        // Cleanup interval khi component unmount
        return () => clearInterval(intervalId);
      }, []);
    
    return(
        <div className='containner'>
          <img className='image' src="https://raw.githubusercontent.com/daoohoangg/wedding-invitation/refs/heads/main/src/img/IMG_5243%20-%20H%E1%BB%87%20%C4%90%C3%A0o%20Th%E1%BB%8B.jpeg" alt='' />      
            <div className='overlay'>
                <div className='text-schedule center font-countdown'>ĐẾM NGƯỢC ĐẾN NGÀY TRỌNG ĐẠI</div>
                <div className='text-schedule list-schedule '>
                  <div className='text-count-down center'>
                    <div className='text-count-down '>{timeLeft.days}</div> 
                    <div className='text-count-down-unit'>Ngày</div> 
                  </div>
                  <div className='text-count-down center'>
                    <div className='text-count-down'>{timeLeft.hours}</div> 
                    <div className='text-count-down-unit'>Giờ</div> 
                  </div>
                  <div className='text-count-down center'>
                    <div className='text-count-down'>{timeLeft.minutes}</div> 
                    <div className='text-count-down-unit'>Phút</div> 
                  </div>
                  <div className='text-count-down center'>
                    <div className='text-count-down '>{timeLeft.seconds}</div> 
                    <div className='text-count-down-unit '>Giây</div> 
                  </div>
                  </div>
                </div>
            </div>
    )
}

export default CountDown;