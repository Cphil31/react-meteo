import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({town}) => {
    

    return (
        <div className='Card'>
            {town.name ? <h3> {town.name} </h3>  : ""}
            {town.name ? <p>Temperature : {town.main.temp} C° </p>  : ""}
            {town.name ? <p>Pays : {town.sys.country}</p>  : ""}
            <img src={town.name ? "http://openweathermap.org/img/wn/"+town.weather[0].icon+"@2x.png": ""} alt={town.name} />
            {town.name ? <p class ="arrow" style={{'transform': 'rotate('+town.wind.deg+'deg)'}} >  &#8593; </p>  : ""}
            <img class="flag" src={town.name ? "https://countryflagsapi.com/png/"+town.sys.country : "" } alt={town.name} />
        </div>
    );
};

export default Card;