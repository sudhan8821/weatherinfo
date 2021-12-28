import React from 'react'
import {useState,useEffect} from 'react';
import './Style.css';
export const Temp = () => {
    const [searchValue,setSearchValue]=useState('bhopal');
    const[tempInfo,setTempInfo]=useState({});
   var getWhetherInfo= async ()=>
    {
        try {
            // let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}
            // &appid=fdf6b7cea20253d6e717936964e0dcc8`
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}
            &units=metric&appid=fdf6b7cea20253d6e717936964e0dcc8`
             var res= await fetch(url);
             var data=await res.json();
             console.log(data);
             var{temp,pressure,humidity}=data.main;
             var{main:wheathermood}=data.weather[0];;
             var{name}=data;
             var{speed}=data.wind;
             var{country,sunset,sunrise}=data.sys;
             var myNewWeatherInfo={
                temp,
                pressure,
                humidity,
                name,
                wheathermood,
                speed,
                country,
                sunset,
                sunrise
             };
             setTempInfo(myNewWeatherInfo);
        } catch (error) {
            alert('Please Enter Correct City Name');
            console.log(error);
        }
    }
    useEffect(() => {
          getWhetherInfo();  
    }, [])
    let sec=tempInfo.sunset;
    let date=new Date(sec*1000);
    let timestr=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    sec=tempInfo.sunrise;
    let sec1=tempInfo.sunrise;
    let date1=new Date(sec1*1000);
    let timestr1=`${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`
    let str=new Date();
    let showDate=`${str.getDate()}/${str.getMonth()+1}/${str.getFullYear()}`  

     let a=new Date();
     let b=`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`
     let[timer,useTimer]=useState(b);
     function  Start()
     {
        let c=new Date();
        let d=`${c.getHours()}:${c.getMinutes()}:${c.getSeconds()}`
        useTimer(d);
     }
     useEffect(() => {
        setInterval(()=>{
            Start();
        },1000)
     }, [])
    return <React.Fragment >
            
             <section className='section'>
             <div className="input-text main-root">
                
                <div className="main">
            <div className='box-controller'>
                    <input  type="text" name="" id="text" placeholder="Type City Name"
                    onChange={(e)=>setSearchValue(e.target.value)} value={searchValue}/>
                    <div className='button-controller'>
                    <button type="button" onClick={getWhetherInfo} className="button"><a href='#'>Search</a></button>
                    </div>
                    </div>
                    {/* <div className='button-controller'>
                    <button type="button" onClick={getWhetherInfo} className="button"><a>Search</a></button>
                    </div> */}
                </div>
    
                <article className="article">
                    <div className="article-box">
                        <div className="article-box-img">
                           <div className="wheather">
                            <img src="https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png" alt="Images"/>
                           </div>
                        </div>
                        <div className="article-box-temp incre">
                            <div className="cloud">
                                <i className="big-text">{tempInfo.temp}&deg;C  Cloud</i><br/>
                                <i className='medium-text'>{tempInfo.name},{tempInfo.country}</i>
                            </div>
                            <div className="timer">
                                <i className="big-text">{showDate}</i><br/>
                                <span className="big-text">{timer}</span>
                                {/* <span className="big-text">{setInterval(() => {start();}
                                , 1000)}</span> */}
    
                            </div>
                        </div>
                        <div className="article-box-footer">
                            <div className="sunset">
                                <div className="sunset-img">
                                    <img className="icon" src="https://image.shutterstock.com/image-photo/silhouette-palm-trees-beautiful-sunset-260nw-1929681917.jpg" alt=""/>
                                </div>
                                <div className="sunset-data">
                                   <i className="medium-text">{timestr}</i><br/>
                                   <i className="medium-text">Sunset</i>
                                </div>
                            </div>
                            <div className="sunrise">
                                <div className="sunrise-img">
                                    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarshallshepherd%2Ffiles%2F2017%2F05%2F18698369_10212844348565183_8072570633462979037_n.jpg" alt="" class="icon"/>
                                </div>
                                <div className="sunrise-data">
                                    <i className="medium-text">{timestr1}</i><br/>
                                    <i className="medium-text">SunRise</i>
                                </div>
                            </div>
                            <div className="humidity">
                                <div className="humidity-img">
                                    <img src="https://static-int.testo.com/media/4c/fa/4655130c014a/Teaser-Unterseiten-2000x1500pix_master.jpg" alt="" class="icon"/>
                                </div>
                                <div className="humidity-data">
                                    <i className="medium-text">{tempInfo.humidity}%</i><br/>
                                    <i className="medium-text">Humidity</i>
                                </div>
                            </div>
     
                        </div>
                    </div>
                </article>
            </div>
        
            {/* <h1>City Name {tempInfo.name},{tempInfo.country}</h1>
                    <h2>Temperatur is {tempInfo.temp}&deg;C</h2> */}
             </section>
        
    </React.Fragment>
        
}