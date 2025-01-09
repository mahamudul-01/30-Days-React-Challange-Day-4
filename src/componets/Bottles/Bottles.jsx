import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles,setBottles]=useState([])

    // load bottle data
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/es6-modules-overview/b98f554a1599fb8b2a6ad4e3d478b7badc6b43b7/public/bottles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data))
    },[])
    return (
        <div>
            {
                bottles.map(bottle=> <Bottle></Bottle>)
            }
        </div>
    );
};

export default Bottles;