import React from 'react';

import Header from './Header';
import GenerateGuess from './GenerateGuess';
import Guess from './Guess';
import Results from './Results';

function MainPage() {

    return (
        <div id="MainPage">
            <Header />
            <div className="flex max-w-7xl m-auto px-14 pt-5">
                    <div className='w-1/2 pr-20'>
                        <GenerateGuess />
                    </div>
                    <div className='w-1/2 pl-20'>
                        <Guess />
                    </div>
                    </div>
                    <center>
                    <div class="container">
                        <div class="circle">
                        </div>
                    </div>
                    </center>
            <div className="flex max-w-7xl m-auto px-14 pt-6">
                <Results />
            </div>
        </div>
    );
}

export default MainPage;