import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'

const Bottles = () => {
    const [bottles,setBottles]=useState([])

    const [bottleCart,setBottleCart]=useState([])

    const handleCart=(bottle)=>{
        
        const newCartBottle=[...bottleCart,bottle]
        setBottleCart(newCartBottle)
    }

    // load bottle data
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/es6-modules-overview/b98f554a1599fb8b2a6ad4e3d478b7badc6b43b7/public/bottles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data))
    },[])
    return (
        <div>
            <h4>Cart:{bottleCart.length} </h4>
            <div className="bottles-container">
            {
                bottles.map(bottle=> <Bottle bottle={bottle} handleCart={handleCart} key={bottle?.id}></Bottle>)
            }
        </div>
        </div>
    );
};

export default Bottles;