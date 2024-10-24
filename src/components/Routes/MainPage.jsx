import Banner from "../Banner";
import Schedule from "../Schedule";
import Location from "../Location";
import CountDown from "../CountDown";
import Footer from "../Footer";

function MainPage(){
    return(
        <div>
            <Banner/>
            <Schedule/>
            <Location/>
            <CountDown/>
            <Footer/>
        </div>
    )
}
export default MainPage;