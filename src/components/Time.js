import React from "react";
import ReactDOM  from "react-dom";


export default function Time(){
    let currentTime = new Date().toLocaleTimeString();
    const [time, getTime] = React.useState(currentTime);

    function updateTime (){
        const time = new Date().toLocaleTimeString();
        getTime(time);
    }
    setInterval(updateTime, 1000);


    return(
        <div>
            <h3>{time}</h3>
        </div>
    );



}