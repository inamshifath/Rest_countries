import { useEffect, useState } from "react";
import Country from "../contry/Country";
import './countries.css'

const Countries = () => {
    const [countries,setcountries]=useState([]);
    const[visitedlist, setvisitedlist]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])

    const handleVisitedlist = country =>{
        const newlist=[...visitedlist,country]
        setvisitedlist(newlist)
    }


    return (
        <div>
            <div>
                <h3>list count:{visitedlist.length} </h3>
                <ul>
                {
                    visitedlist.map(country=><li key={country.cca3}>{country.name.common} </li>)
                }
                </ul>
                
            </div>
            <div className="three_slide" >
                {
                    countries.map(country=><Country 
                        key={country.cca3} 
                        country={country} 
                        handleVisitedlist={handleVisitedlist}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;