import { useState } from "react";
import Watch from "../Watch/Watch";
import { useEffect } from "react";

const Watches = () => {

    const [watches,setWatches]=useState([])

    useEffect(()=>{
        fetch('watches.json')
        .then(res=> res.json())
        .then(data=> setWatches(data))
    },[])
      
      
    return (
        <div>
            {
                watches.map(watch=><Watch watch={watch} key={watch?.id}></Watch>)
            }
        </div>
    );
};

export default Watches;