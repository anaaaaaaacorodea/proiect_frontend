import React from 'react';
import axios from 'axios';
import { LANGUAGES_ARRAY } from '../utils/constants';

function Guess() {
    const handleMessageSend = async (e) => {

        window.location.reload();
  
        const guesserName = document.getElementById('guesserName').value;
        const guesserAge = document.getElementById('guesserAge').value;
        const guessPokemon = document.getElementById('guessPokemon').value;
        const descriptionLanguage = e.target.value;

        sessionStorage.setItem('guessedName', guessPokemon);
        sessionStorage.setItem('sendguess', true);
        sessionStorage.setItem('lang', descriptionLanguage);
        //const descriptionLanguage = "ROMANIAN";

        try {
            let response = await axios.post(
                `${process.env.REACT_APP_API_URL}/guesses`,
                {
                    guesserName,
                    guesserAge,
                    guessPokemon,
                    descriptionLanguage
                });
            if(response) {
                alert(`You guess ${guessPokemon} was added`);
                sessionStorage.setItem('sendguess', true);
            }
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }

    return (
        <div id="PokemonGuessSubmit">
            <div className='text-2 font-bold mb-4 tracking-wide text-gray-700 underline'>Submit you pokemon guess:</div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="guesserName">
                            Your name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="guesserName" type="text" placeholder="name or surname" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="guesserAge">
                            Your age
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="guesserAge" type="text" placeholder="age" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="guessPokemon">
                            Guess the pokemon
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="guessPokemon" type="text" placeholder="all low letters ex:pikachu" />
                    </div>
                    <div className="align-items:center block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 py-2 " htmlFor="SelectLang">
                            Select a language for the description and find out if you guesses right
                    </div>
                    <div>
                    {LANGUAGES_ARRAY.map((language, index) => {
                    return (
                        <button
                            key={index}
                            id = "descriptionLanguage"
                            className="bg-red-500 hover:bg-yellow-500 text-white py-1.5 px-4 rounded m-2 capitalize"
                            onClick={handleMessageSend}
                            value={language}>
                            {language.toLowerCase()}
                        </button>
                    )
                    })}
                    </div>

                </div>
              
            </form>
            
            </div>
    );
}

export default Guess;