import {React,useState,useEffect} from 'react';



function Timer()
{
    const[time,setTimer] = useState(8500000);
   
const days = Math.floor(time / (3600 * 24));
const hours = Math.floor((time % (3600 * 24)) / 3600);
const minutes = Math.floor((time % 3600) / 60);
const seconds = time % 60;
useEffect(()=>{
    const changeTime = setInterval(() => {
        setTimer(prevTime => prevTime-1);
    }, 1000);
    return () => {
			clearInterval(changeTime);
		};
   
},[time])
    console.log(setTimer);
    return (
			<main className="countDown__timer">
				<h1>WE`RE LAUNCHING SOON</h1>
				<div className="countDown__timer">
					<div className="days countDown__timer--card">
						<div className="darker-text"></div>
						<p>{days}</p>
					</div>
					<div className="hours countDown__timer--card">
						<div className="darker-text"></div>
						<p>{hours}</p>
					</div>
					<div className="minutes countDown__timer--card">
						<div className="darker-text"></div>
						<p>{minutes}</p>
					</div>
					<div className="seconds countDown__timer--card">
						<div className="darker-text"></div>
						<p>{seconds}</p>
					</div>
				</div>
				<div className="countDown__timer">
					<div className="days countDown__timer--desc">days</div>
					<div className="hours countDown__timer--desc">hours</div>
					<div className="minutes countDown__timer--desc">minutes</div>
					<div className="seconds countDown__timer--desc">seconds</div>
				</div>
			</main>
		);
}

export default Timer;