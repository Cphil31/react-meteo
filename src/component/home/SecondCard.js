import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Github from './Github';

const SecondCard = ({town}) => {

    const [countryName,setCountryName] = useState([]);
    const [dataCountry,setDataCountry] = useState([]);

    useEffect( ()=>{
        if(town.name){
            axios.get(`https://restcountries.com/v3.1/alpha/${town.sys.country}`)
                .then( dataCountry => setDataCountry(dataCountry.data[0]) )
            axios.get(`https://restcountries.com/v3.1/alpha/${town.sys.country}`)
            .then( dataCountry => setCountryName(dataCountry.data[0].translations.fra.common) )
        }


    },[town] );

    return (
        <div className='secondCard'>
            <img class="flag" src={town.name ? "https://countryflagsapi.com/png/"+town.sys.country : "" } alt={town.name} />
            <p>Pays : {countryName} </p>
            <p>Capitale : {dataCountry.capital}</p>  
            <Github/>  
        </div>
    );
};

export default SecondCard;