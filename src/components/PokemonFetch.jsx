import React, {useState} from "react";
import axios from "axios";
const PokemonFetch = () => {


    const [pokedex, setpokedex] = useState([]);
    
    const GetPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {setpokedex(response.data.results)})
}

    return (
        <div>
            <h3>Got Pokemon?</h3>
            <button onClick={GetPokemon}>Fetch Pokemon</button>
            {pokedex.map((pokeObj, i) => {
                return (
                    <div>
                        <h3>{pokeObj.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

// make sure to export component
export default PokemonFetch;