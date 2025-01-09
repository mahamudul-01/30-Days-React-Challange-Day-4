import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { addToLocalStorage, getStoredItem } from "../../Utils/localStorage";

const Bottles = () => {
    const [bottles,setBottles]=useState([])

    const [bottleCart,setBottleCart]=useState([])

    // load localstorage data

    useEffect(()=>{
        if(bottles.length){
            const localStorageCart=getStoredItem()
            const saveCart=[]

            for (const id of localStorageCart){
                const bottle=bottles.find(bottle=> bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setBottleCart(saveCart)
        }
         
    },[bottles])

    const handleCart=(bottle)=>{
        
        const newCartBottle=[...bottleCart,bottle]
        setBottleCart(newCartBottle)
        addToLocalStorage(bottle.id)
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