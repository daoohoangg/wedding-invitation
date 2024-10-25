import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className="header row g-0">
            <div className='col-sm-3 extra-link '>
                <Link to="/love-story" className='none underline'><div className='text-header'>CÂU CHUYỆN TÌNH YÊU</div></Link>
                <Link to="/about-family" className='none underline'><div className='text-header none'>THÔNG TIN VỀ ĐÁM CƯỚI</div></Link>
                <Link to="/register" className='none underline'><div className='text-header none'>THAM GIA CÙNG CHÚNG MÌNH</div></Link>
            </div>
            <div className='col-sm-6 name-main'>
                <Link to="/" className='none'><h2 >ĐÀO HỆ & DUY ANH</h2></Link>
            </div>
            <div className='col-sm-3 name'>
                <Link to="/forms" className='none'><div className='underline more-infor text-header'>FQAS</div></Link>
            </div>
        </div>
    )
}

export default Header;