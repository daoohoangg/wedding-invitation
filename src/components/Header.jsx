import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css'
function Header(){
    return(
        <div className="header row">
            <div className='col-sm-3 extra-link'>
                <a href=""><div className='text-header'>CÂU CHUYỆN TÌNH YÊU</div></a>
                <a href=""><div className='text-header'>THÔNG TIN VỀ ĐÁM CƯỚI</div></a>
                <a href=""><div className='text-header'>THAM GIA CÙNG CHÚNG MÌNH</div></a>
            </div>
            <div className='col-sm-6 name-main'>
                <a href=""><h2>ĐÀO HỆ & DUY ANH</h2></a>
            </div>
            <div className='col-sm-3 name'>
                <a href=""><div className='more-infor text-header'>FQAS</div></a>
            </div>
        </div>
    )
}

export default Header;