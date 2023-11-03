import React from 'react'
//import Details from './Details'
//import moment from 'moment';

export default function Weathercard(props) {
    let {image,city,temp,des,feel,max,min,sunrise,sunset,hum} = props;
    let images = null;
    if (image !== "undefined") {
        if (image === "Clouds") {
            images = "https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif"
        }
        if (image === "Snow") {
            images = "https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif"
        }
        if (image === "Rain") {
            images = "https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif"
        }
        if (image === "Thunderstorm") {
            images = "https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif"
        }
        if (image === "Fog") {
            images = "https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif"
        }
        if (image === "Clear") {
            images = "https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif"
        }
        if(image === "Haze") {
            images = "https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif"
        }

    }
    else {
        images = "https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif"
    }


    return (
        <section className="vh-100" style={{ backgroundcolor: "#f5f6f7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-10 col-lg-8 col-xl-6">

                        <div className="card bg-dark text-white" style={{ borderradius: "40px" }}>
                            <div className="bg-image" style={{ borderradius: "35px" }}>
                                <img src={images}
                                    className="card-img" alt="weather" />
                                <div className="mask" style={{ backgroundcolor: "rgba(190, 216, 232, .5)" }}></div>
                            </div>
                            <div className="card-img-overlay text-dark p-5">
                                <h1 className="mb-0">{city}</h1>
                                <p className="display-2 my-3">{temp}°C</p>
                                <p className="mb-2">Feels Like: <strong>{feel}°C</strong></p>
                                <p className="mb-2">Max_Temprature: <strong>{max}°C</strong></p>
                                <p className="mb-2">Min_Temprature: <strong>{min}°C</strong></p>
                                <p className="mb-2">Humidity: <strong>{hum}%</strong></p>
                                <h5>{des}</h5>
                                <p className="mb-2">Sunrise: <strong>{sunrise}</strong></p>
                                <p className="mb-2">Sunset: <strong>{sunset}</strong></p>
                                {/* <p className="mb-2">Date: <strong>{moment().format('LL')}</strong></p>
                                <p className="mb-2">Day: <strong>{moment().format('dddd')}</strong></p> */}
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

        </section>



    );
}

