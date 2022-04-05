import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";

const Card = ({town}) => {    
    
    return (
        <div className='card' >
            <FirstCard key={town.id} town={town} />
           
            <SecondCard key={town.id} town={town}  />          
        </div>
    );
};

export default Card; 