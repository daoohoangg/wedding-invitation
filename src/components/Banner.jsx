import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css'
function Banner(){  
    return(
        <div>
        <div className='row banner'>
            <div className='col-md-4 banner-img-left'>
                <img src="https://raw.githubusercontent.com/daoohoangg/wedding-invitation/refs/heads/main/src/img/IMG_5241%20-%20H%E1%BB%87%20%C4%90%C3%A0o%20Th%E1%BB%8B.jpeg" alt=''></img>
            </div>
            <div className='col-md-4 banner-img-center' >
                <img src="https://raw.githubusercontent.com/daoohoangg/wedding-invitation/refs/heads/main/src/img/IMG_5245%20-%20H%E1%BB%87%20%C4%90%C3%A0o%20Th%E1%BB%8B.jpeg" alt="" />
            </div>
            <div className='col-md-4 banner-img-right'>
                <img src="https://raw.githubusercontent.com/daoohoangg/wedding-invitation/refs/heads/main/src/img/IMG_5240%20-%20H%E1%BB%87%20%C4%90%C3%A0o%20Th%E1%BB%8B.jpeg" alt="" />
            </div>
            
        </div>
        <div className='text-banner'>
            <h1>10 ∙ 11 ∙ 2024</h1>
        </div>
        <div className='banner-description'>Tham gia cùng chúng mình khi bắt đầu một hành trình tình yêu, niềm vui và hạnh phúc vĩnh cửu.</div>
        </div>
    )
    
}
export default Banner;