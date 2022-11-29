import React, { useEffect } from "react";
import Player from "./Player";
import { useState } from "react";

export default function Main(props) {
    
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products/');
        const items = await data.json();
        console.log(items);
        setItems(items);
        console.log(items[0])
    }

    useEffect(() => {
        fetchItems();
    }, [])

    const [count, setCount] = useState(0)
    return (<div>
        <h1>
            Hassnain {count}
        </h1>
        <button onClick={() => { setCount(count + 1); }}> hello</button>
        {   items==[]?<p>Empty</p>:
            items.map(i=>(
                <Player name={i.title} desc={i.description}/>
            ))
        }


    </div>
    );
}