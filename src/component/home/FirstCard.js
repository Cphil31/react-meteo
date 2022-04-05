import React from 'react';

const FirstCard = ({town}) => {
    return (
        <div className='firstCard'>
            <img class="sky" src={town.name ? "http://openweathermap.org/img/wn/"+town.weather[0].icon+"@2x.png": ""} alt={town.name} /> 
            <p>{town.main.temp} C° </p>
            <div className='wind'>    
                <p>vent : </p>
                <p class ="arrow" style={{'transform': 'rotate('+town.wind.deg+'deg)'}} >  &#8593; </p>
            </div>
            
              
        </div>
    );
};

export default FirstCard;