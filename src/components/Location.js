import React, { useEffect, useState } from 'react'
import Details from './Details';

export default function Location() {
    const [lati , setLati] = useState();
    const [long , setLong] = useState();
    // let componentDidMount = async () => {
        
    // }
    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                setLati(position.coords.latitude);
                setLong(position.coords.longitude);
            });
        }
       

       // componentDidMount();
        // eslint-disable-next-line
    },[])

    return(
        <Details lati={lati} long={long}></Details>
    )


}

