import { useEffect, useState } from "react";
import Country from "../contry/Country";
import './countries.css'

const Countries = () => {
    const [countries,setcountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])

    return (
        <div className="three_slide" >
            {
                countries.map(country=><Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;