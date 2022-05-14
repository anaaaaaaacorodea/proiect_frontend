import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Refresh(){
    window.location.reload();
    sessionStorage.removeItem('sendguess');
}

function GenerateGuess() {
    const [randomPokemonResult, setPokemon] = useState([]);

    const guessSent = sessionStorage.getItem('sendguess');

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/pokemons/random`,
            );

            if (result.data.randomPokemonResult) {
                setPokemon(result.data.randomPokemonResult);
                //console.log(result.data.randomPokemonResult);
                sessionStorage.setItem('pokeName', result.data.randomPokemonResult.pokemonName);
                sessionStorage.setItem('pokeDescription', result.data.randomPokemonResult.pokemonDescription);
                sessionStorage.setItem('pokeImage', result.data.randomPokemonResult.pokemonImageLink);
                //console.log(localStorage.getItem('my-key'));
            }
        };
        
        fetchData();
    }, []);



    if(guessSent) {
    return ( 
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        <div id = "PokemonHints" className="">
            <button
                id = "buton"
                className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded m-2 capitalize"
                onClick={Refresh}
                value="Generate Guess">
                    Generate another pokemon!
            </button>

            </div>

        </div>
     );
    }
    else {
        if(randomPokemonResult.pokemonType){
            return ( 
                <div>
                <div id = "PokemonHints" className="">
    
                    <div className='text-2 font-bold mb-4 underline tracking-wide text-gray-700'>These are your hints:</div>
    
                    <div className='text-base font-bold mb-4 py-2 tracking-wide text-gray-700'> Your pokemon's type is: </div>
                    <div className='block uppercase text-sm font-bold mb-4 tracking-wide text-gray-700'>{`${randomPokemonResult.pokemonType}`}</div>
    
                    <div className='text-1xl font-bold mb-4 py-2 tracking-wide text-gray-600'>The keywords for your pokemon are:</div>
                    <div className='block uppercase text-sm font-bold mb-4 tracking-wide text-gray-700'>{`${randomPokemonResult.pokemonLabels}`}</div>
    
                    <div className='text-1xl font-bold mb-4 py-2 tracking-wide text-gray-600'>Your pokemon's dominant colors are:</div>
                    <div className="align-items:center">
                    
                    <div className="dot" style={{backgroundColor: `${randomPokemonResult.pokemonDominantColors.color1}`}}> </div> &nbsp;&nbsp;&nbsp;
                    <div className="dot" style={{backgroundColor: `${randomPokemonResult.pokemonDominantColors.color2}`}}>  </div> &nbsp;&nbsp;&nbsp;
                    <div className="dot" style={{backgroundColor: `${randomPokemonResult.pokemonDominantColors.color3}`}}>  </div> &nbsp;&nbsp;&nbsp;
                    <div className="dot" style={{backgroundColor: `${randomPokemonResult.pokemonDominantColors.color4}`}}>  </div> &nbsp;&nbsp;&nbsp;
                    <div className="dot" style={{backgroundColor: `${randomPokemonResult.pokemonDominantColors.color5}`}}>  </div>
    
                    </div>
    
                </div>
                </div>
            
             );
        }
        
    }
}

export default GenerateGuess;


