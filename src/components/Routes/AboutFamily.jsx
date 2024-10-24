import {Link } from 'react-router-dom';
import React from 'react';
import Schedule from '../Schedule';
import Location from '../Location';
function AboutFamily(){
    return(
        <div>
            <Schedule/>
            <Location/>
        </div>
    )
}
export default AboutFamily;