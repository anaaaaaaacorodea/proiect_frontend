import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Results() {

    const name = sessionStorage.getItem('pokeName');
    const image = sessionStorage.getItem('pokeImage');
    const descrip = sessionStorage.getItem('pokeDescription');
    const guessSent = sessionStorage.getItem('sendguess');
    const lang = sessionStorage.getItem('lang');

    const [translatedText, translateText] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/utils/translate/` + descrip + `/` + lang,
            );
            if (result.data.translatedText) {
                translateText(result.data.translatedText);
            }
        };

        fetchData();
    }, []);

    if (guessSent) {
        let answer;
        let fontcolor;
        if (name === sessionStorage.getItem('guessedName')) {
            answer = "Good job, you guesses the pokemon right!";
            fontcolor = "green";
        }
        else {
            answer = "You did not guess the pokemon right, try again!";
            fontcolor = "red";
        }

        return (
            <div>
                <div className='text-2xl font-bold mb-4 pt-5' style={{color: `${fontcolor}`}}>
                    {`${answer}`}
                </div>
                <div className="flex max-w-7xl m-auto px-14 py-5">

                    <div className='w-1/2 pr-20'>

                        <div className='align-items:center block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-14 pt-5'>
                            Your pokemon is: {`${name}`}
                        </div>
                        <center>
                            <img src={`${image}`} width="100" height="200">
                            </img>
                        </center>
                    </div>
                    <div className='w-1/2 pl-20'>
                        <div className='align-items:center block uppercase tracking-wide text-gray-700 text-xs font-bold px-14 pt-6 '>
                            Description:
                        </div>
                        <div>
                            {`${translatedText}`}
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default Results;