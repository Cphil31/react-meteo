import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({town}) => {    

    const [countryName,setcountryName] = useState([]);
    const [dataCountry,setDataCountry] = useState([]);

    useEffect(()=>{
        if(town.name){
            axios.get(`https://restcountries.com/v3.1/alpha/${town.sys.country}`) 
            .then( res => setcountryName(res.data[0].translations.fra.common)  )  
            axios.get(`https://restcountries.com/v3.1/alpha/${town.sys.country}`)
            .then( dataCountry => setDataCountry(dataCountry.data[0]) )   
        }
    },[town])
    
    return (
        
        <div className='Card'>
            <h3> {town.name} </h3>  
            <p class ="arrow" style={{'transform': 'rotate('+town.wind.deg+'deg)'}} >  &#8593; </p>
            <p>{town.main.temp} C° </p>
            <img src={town.name ? "http://openweathermap.org/img/wn/"+town.weather[0].icon+"@2x.png": ""} alt={town.name} /> 
            <img class="flag" src={town.name ? "https://countryflagsapi.com/png/"+town.sys.country : "" } alt={town.name} />
            {town.name ? <p>Pays : {countryName} </p>: " "}
            {<p>Capitale : {dataCountry.capital}</p>}  
        </div>
    );
};

export default Card; 