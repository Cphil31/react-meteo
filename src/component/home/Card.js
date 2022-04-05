import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";

const Card = ({town}) => {    
    
    return (
        <div className='card' >
            <h2>{town.name}</h2>
            <FirstCard key={town.id} town={town} />
            <SecondCard key={town.id} town={town}  />          
        </div>
    );
};

export default Card; 