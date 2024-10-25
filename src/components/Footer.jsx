import { Link } from 'react-router-dom';
import './css/style.css';

function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Tạo hiệu ứng cuộn mượt mà
        });
    };
    return(
        <div className='Footer'>
            <div className='row g-10'>
                <div className='col-sm-1'></div>
                <div className='col-sm-4'>
                    <div className='footer-right flex-col'>
                        {/* <div className='center footer-head-text '>DRESS CODE</div> */}
                        <img src="https://github.com/daoohoangg/wedding-invitation/blob/main/src/img/81f40cac46d741be34b1d802b9f4d472.jpg?raw=true" alt="" />
                        <div className='footer-head-descrip'>Đối với sự kiện trọng đại nhất trong cuộc đời chúng mình, hi vọng bạn sẽ lựa chọn cho bản thân một bộ trang phục trang trọng và phù hợp với bữa tiệc.</div>
                    </div>

                </div>
                <div className='col-sm-2'></div>
                <div className='col-sm-4'>
                <div className='footer-right flex-col'>
                        <div className='center footer-head-text '>THAM DỰ</div>
                        <img src="https://github.com/daoohoangg/wedding-invitation/blob/main/src/img/Screenshot%202024-10-25%20042229.png?raw=true" alt="" />
                        <div className='footer-head-descrip'>Sự có mặt của bạn chính là niềm vui cũng như món quà lớn nhất đối với chúng mình. Nếu bạn muốn chia sẻ niềm vui với chúng mình thì hãy đến tham dự lễ cưới hoặc mừng cưới thông qua QR bên trên nhé. Mãi yêu!!!</div>
                    </div>
                </div>
                <div className='col-sm-1'></div>
            </div>
            <div className='center'>
            <button className="scroll-to-top center" style={buttonStyle} onClick={scrollToTop}>Quay về đầu trang</button>
            </div>
        </div>
    )
}
const buttonStyle = {
    backgroundColor: '#000000',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
};
export default Footer;