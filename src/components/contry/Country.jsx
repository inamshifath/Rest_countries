import { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedlist }) => {
    const { name, flags,capital,region,cca3} = country;
    const [visited, setvisited]=useState(false)
    const handleVisited=()=>{
        setvisited(!visited)
    }

    return (
        <div className="contry">
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>capital:  {capital} </p>
            <p>region:  {region} </p>
            <p>code:{cca3} </p>
            <button onClick={handleVisited}>{visited?"visited":"going to"} </button>
            <button onClick={()=>handleVisitedlist(country)} >add to list</button>
            {
                visited ? <span>already visited</span> : <span>not yet visited</span>
            }
        </div>
    );
};

export default Country;
