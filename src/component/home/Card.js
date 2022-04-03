
const Card = ({town}) => { 
    
    return (
        <div className='Card'>
            <h3> {town.name} </h3>  
            <p>{town.main.temp} C° </p>
            <img src={town.name ? "http://openweathermap.org/img/wn/"+town.weather[0].icon+"@2x.png": ""} alt={town.name} /> 
            <p class ="arrow" style={{'transform': 'rotate('+town.wind.deg+'deg)'}} >  &#8593; </p>
            <img class="flag" src={town.name ? "https://countryflagsapi.com/png/"+town.sys.country : "" } alt={town.name} />
            <p>Pays : {town.sys.country}</p>
        </div>
    );
};

export default Card; 