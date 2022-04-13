import React, { useEffect, useState } from "react";
import { useApi } from "../services/api";
import './PokeCard.css'

export default function PokeCard({url}){
    const api = useApi();

    const [pokeData, setPokeData] = useState({}) 
    
    useEffect(() => {
        if(url){
            (async function(){
                const data = await api.getPokeByUrl(url)
                setPokeData(data)
            })()
        }
    }, [url])

    return(
        pokeData.sprites &&
        <li className="poke-card">
            <img src={pokeData.sprites.front_default} alt={pokeData.name} />
            <div className="poke-info">
                <span>{pokeData.name}</span>
                <span>Pokedex id: {pokeData.id}</span>
            </div>
        </li>
    )
}