import React, { useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";
import styled from 'styled-components';


function App() {  
    const [data, setData] = useState();

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=RabwhOwN6XnO2qTT2b9IRWeKfayjfX3eI9TN1JMK')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
    }, [])

    return (
      <div className="App">
       {data && <NasaPhoto photo={data} />}
      </div>
    );
}

export default App;

/**
 * date: "2023-04-28"

explanation: "Like a ship plowing through cosmic seas, runaway star Alpha Camelopardalis has produced this graceful arcing bow wave or bow shock. The massive supergiant star moves at over 60 kilometers per second through space, compressing the interstellar material in its path. At the center of this nearly 6 degree wide view, Alpha Cam is about 25-30 times as massive as the Sun, 5 times hotter (30,000 kelvins), and over 500,000 times brighter. About 4,000 light-years away in the long-necked constellation Camelopardalis, the star also produces a strong stellar wind. Alpha Cam's bow shock stands off about 10 light-years from the star itself. What set this star in motion? Astronomers have long thought that Alpha Cam was flung out of a nearby cluster of young hot stars due to gravitational interactions with other cluster members or perhaps by the supernova explosion of a massive companion star."

hdurl: "https://apod.nasa.gov/apod/image/2304/AlphaCamelopardis_s3100.png"
title: "Runaway Star Alpha Camelopardalis"

 */