import React from 'react';
import './css/style.css';

const Location = () => {
  return (
    <div className='location-section row g-0'>  
        <div className="col-sm-4 center text-trans">
          <h1 className='weight400'>NHÀ TRAI</h1>
          <a href="https://www.google.com/maps/place/Nh%C3%A0+V%C4%83n+Ho%C3%A1+Th%E1%BB%8B+T%E1%BB%A9+Ph%C3%B9ng+H%C6%B0ng/@20.8219824,105.9871047,17z/data=!3m1!4b1!4m6!3m5!1s0x3135bb00280b300b:0x12aaf9509e35eab3!8m2!3d20.8219824!4d105.9896796!16s%2Fg%2F11wplrj603?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
            <div className='center underline add-de'>
              <h3 className='weight300'>Thị Tứ, Phùng Hưng</h3>
              <h3 className='weight300'>Khoái Châu, Hưng Yên</h3>
            </div>
          </a>
        </div> 
        <div className='col-sm-4 center location'>
            <div className='textLocation'><h1 className='textLocation'>ĐỊA ĐIỂM</h1></div>
            <div className='img-location'>
                <img src='https://raw.githubusercontent.com/daoohoangg/wedding-invitation/refs/heads/main/src/img/Kinh-nghiem-lua-chon-cong-dam-cuoi-cho-cap-doi-1-1.webp'></img>
            </div>
        </div>
        <div className='col-sm-4 center'>
          
        <h1 className='weight400'>NHÀ GÁI</h1>
        <a href="https://www.google.com/maps/place/QX7M%2BVV5,+Kho%C3%A1i+Ch%C3%A2u,+H%C6%B0ng+Y%C3%AAn,+Vi%E1%BB%87t+Nam/@20.7646425,105.9821595,17z/data=!3m1!4b1!4m5!3m4!1s0x3135b834ae7cb561:0xb6d27f36c01c624e!8m2!3d20.7646375!4d105.9847344?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target='_blank'>
          <div className='center underline add-de'>
            <h3 className='weight300 '>Đội 6,Thành Công, Nhuế Dương</h3>
            <h3 className='weight300 ' > Khoái Châu, Hưng Yên</h3>
          </div>
        </a>
          
        </div>
        <div className='button-location center'><a  target='_blank' href="https://www.google.com/maps/dir/Kim+Quan,+Kho%C3%A1i+Ch%C3%A2u,+H%C6%B0ng+Y%C3%AAn,+Vi%E1%BB%87t+Nam/QX7M%2BVV5,+Nhu%E1%BA%BF+D%C6%B0%C6%A1ng,+Kho%C3%A1i+Ch%C3%A2u,+H%C6%B0ng+Y%C3%AAn,+Vi%E1%BB%87t+Nam/@20.7943567,105.9944562,14z/data=!4m13!4m12!1m5!1m1!1s0x3135ba1a2fb80399:0xacf1dfbb4303f63a!2m2!1d105.9868804!2d20.8185264!1m5!1m1!1s0x3135b9cce1b0ea7f:0x50ca3fc4dec7b10b!2m2!1d105.9847917!2d20.7646396?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">ĐỊA CHỈ TỔ CHỨC</a></div>
        </div>
  );
}

export default Location;
