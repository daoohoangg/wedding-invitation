import Banner from "../Banner";
import Schedule from "../Schedule";
import Location from "../Location";
import CountDown from "../CountDown";

function MainPage(){
    return(
        <div>
            <Banner/>
            <Schedule/>
            <Location/>
            <CountDown/>
        </div>
    )
}
export default MainPage;