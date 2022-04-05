import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SecondCard = ({town}) => {

    const [countryName,setCountryName] = useState([]);
    const [dataCountry,setDataCountry] = useState([]);
    console.log(town)
    useEffect = (()=>{
                        if(town.name){
                            axios.get(`https://restcountries.com/v3.1/alpha/${town.sys.country}`)
                                .then( dataCountry => setDataCountry(dataCountry.data[0]) )
                            axios.get(`https://restcountries.com/v3.1/alpha/${town.sys.country}`)
                            .then( dataCountry => setCountryName(dataCountry.data[0].translations.fra.common) )

                        }

                    },[town]);

    return (
        <div>
            
            <img class="flag" src={town.name ? "https://countryflagsapi.com/png/"+town.sys.country : "" } alt={town.name} />
            <p>Pays : {town.countryName} </p>
            
            {<p>Capitale : {dataCountry.capital}</p>}  
            
        </div>
    );
};

export default SecondCard;