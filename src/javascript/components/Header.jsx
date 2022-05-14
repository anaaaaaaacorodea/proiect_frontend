import React from 'react';

function Header() {
    return ( 
        <header className='bg-red-600 justify-center'>
            <span>
                    <center>
                        <img src="https://www.lulutoys.ro/wp-content/uploads/2021/03/1200px-International_Pokemon_logo.svg_.png" width="140"></img>
                        <div className='self-center text-white text-bold text-xl'>
                            Guess 'em all!
                        </div>
                    </center>
            </span>
        </header>
     );
}

export default Header;