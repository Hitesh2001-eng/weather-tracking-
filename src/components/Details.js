import React, { useEffect, useState } from 'react'
import Weathercard from './Weathercard'
//import axios from "axios";


export default function Details() {
    const [weather,setWeather] = useState([])
    // const [cname,setCname] = useState(null)
    //const [lati , setLati] = useState([]);
    //const [long , setLong] = useState([]);
    const [data, setData] = useState([]);

    //let {lati , long} = props;

    useEffect(() => {
        // let componentDidMount = ()=>{
        //   if (navigator.geolocation){}
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            //    setLati([position.coords.latitude]);
            //    setLong([position.coords.longitude]);
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=bde79735872d7dfd69dd35fab7b9e890`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    setWeather(result.weather)
                    console.log(result);
                });



        });

        //}


        // eslint-disable-next-line
    }, [])

    // let fetchMoreData = async () =>{

    //     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&units=metric&appid=bde79735872d7dfd69dd35fab7b9e890`
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData)
    //     setWeather(parsedData.weather)
    //     setCname(parsedData)

    // }

    return (
        <div>
            {/* {(typeof data.main != 'undefined') ? (<Weathercard key={data.id} wdata={data} image={data.weather.main} />) : (<div></div>)} */}

            {/* {data?.map((datas)=>{
               return <Weathercard key={datas.id} city={datas.name} image={datas.weather.main} />
            })} */}
             
             {weather?.map((ele)=>{
                return <Weathercard key={data.id} city={data.name} image={ele.main} temp={data.main.temp} feel={data.main.feels_like} des={ele.description} max={data.main.temp_max} 
                min={data.main.temp_min} sunrise={new Date(data.sys.sunrise*1000).toLocaleTimeString('en-IN')} sunset={new Date(data.sys.sunset*1000).toLocaleTimeString('en-IN')}
                hum = {data.main.humidity}/>

             })}
            
        </div>


    );
}
// Details.defaultProps={
//     lati : 17.476427,
//     long : 81.823649

// }


// https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp