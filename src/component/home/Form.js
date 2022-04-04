import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Form = () => {
    const [town,setTown]= useState([]) ;
    const [search,setSearch]= useState(null);
    
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=cd02f311a655c739700a13f10f3651c3&lang=fr`)
        .then(res=> setTown(res.data) )
  
    },[search]);

    
                    
    return (
        <div className='form' >
              <form action="">
                  <input 
                  type="text" 
                  placeholder="Entrez le nom d'une ville"
                  onChange={(e) => setSearch(e.target.value+" ")}
                  /> 
              </form>
              {town.name ? <Card key={town.id} town={town} /> : " "}
               

        </div>
    );
};

export default Form;