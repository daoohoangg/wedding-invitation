import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
function Schedule(){
    return (
        <div className='schedule'>
            <div className='containner'>
                <img className='image' src="https://raw.githubusercontent.com/daoohoangg/wedding-invitation/refs/heads/main/src/img/IMG_5246%20-%20H%E1%BB%87%20%C4%90%C3%A0o%20Th%E1%BB%8B.jpeg" alt="" />
                <div className='overlay'>
                    <div className='text-schedule mg10'>BẬT MÍ VỀ BUỔI TIỆC</div>
                    <div className='text-schedule text-spec mg8'>
                        LỊCH TRÌNH TRONG NGÀY ĐẶC BIỆT CỦA CHÚNG MÌNH
                    </div>
                    <div className='text-schedule time-schedule list-schedule'>
                        <div className='text-schedule'>
                            <div className='text-schedule'>10:00 AM</div>
                            <div className='text-schedule'>LỄ CƯỚI</div>
                        </div>
                        <div className='text-schedule'>
                            <div className='text-schedule'>12:00 AM</div>
                            <div className='text-schedule'>ĐƯA DÂU</div>
                        </div>
                        <div className='text-schedule'>
                            <div className='text-schedule'>2:00 PM</div>
                            <div className='text-schedule'>DÙNG BỮA</div>
                        </div>
                        <div className='text-schedule'>
                            <div className='text-schedule'>4:00 PM</div>
                            <div className='text-schedule'>TRI ÂN</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )   
}
export default Schedule;