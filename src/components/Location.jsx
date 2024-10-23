import React from 'react';
import './css/style.css';

const Location = () => {
  return (
    <div className='location-section row g-0'>  
        <div className="col-md-4 center">
          <h1 className='weight400'>CHÚ RỂ</h1>
          <a href="" target='_blank'>
            <div className='center underline'>
              <h3 className='weight300'>Thị Tứ, Phùng Hưng</h3>
              <h3 className='weight300'>Khoái Châu, Hưng Yên</h3>
            </div>
          </a>
        </div> 
        <div className='col-md-4 center'>
            <div className='textLocation'><h1 className='textLocation'>ĐỊA ĐIỂM</h1></div>
            <div className='img-location'>
                <img src='https://raw.githubusercontent.com/daoohoangg/wedding-invitation/refs/heads/main/src/img/Kinh-nghiem-lua-chon-cong-dam-cuoi-cho-cap-doi-1-1.webp'></img>
            </div>
        </div>
        <div className='col-md-4 center'>
          
        <h1 className='weight400'>CÔ DÂU</h1>
        <a href="https://www.google.com/maps/place/QX7M%2BVV5,+Kho%C3%A1i+Ch%C3%A2u,+H%C6%B0ng+Y%C3%AAn,+Vi%E1%BB%87t+Nam/@20.7646425,105.9821595,17z/data=!3m1!4b1!4m5!3m4!1s0x3135b834ae7cb561:0xb6d27f36c01c624e!8m2!3d20.7646375!4d105.9847344?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target='_blank'>
          <div className='center underline'>
            <h3 className='weight300 '>Đội 6,Thành Công, Nhuế Dương</h3>
            <h3 className='weight300 ' > Khoái Châu, Hưng Yên</h3>
          </div>
        </a>
          
        </div>
        <div className='center'>
          <div className='button-location center'><a  target='_blank' href="https://www.google.com/maps/dir/Kim+Quan,+Kho%C3%A1i+Ch%C3%A2u,+H%C6%B0ng+Y%C3%AAn,+Vi%E1%BB%87t+Nam/QX7M%2BVV5,+Nhu%E1%BA%BF+D%C6%B0%C6%A1ng,+Kho%C3%A1i+Ch%C3%A2u,+H%C6%B0ng+Y%C3%AAn,+Vi%E1%BB%87t+Nam/@20.7943567,105.9944562,14z/data=!4m13!4m12!1m5!1m1!1s0x3135ba1a2fb80399:0xacf1dfbb4303f63a!2m2!1d105.9868804!2d20.8185264!1m5!1m1!1s0x3135b9cce1b0ea7f:0x50ca3fc4dec7b10b!2m2!1d105.9847917!2d20.7646396?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">ĐỊA CHỈ TỔ CHỨC</a></div>
        </div>
    </div>
  );
}

export default Location;
