import React, { useState } from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

// const setUniversalTheme = (theme) => {
//     const myTheme = appTheme[theme];
//     for(let key in myTheme) {
//         document.documentElement.style.setProperty(key, myTheme[key]);
//         console.log(key, myTheme[key]);
//     }
// }

const Header = () => {
    const [theme, setTheme] = useState('light');

    const onThemeClick = (e) => {
        e.preventDefault();
        if (theme === 'light') { 
            setTheme('dark');
            document.documentElement.classList.add('dark');

        }
        else { 
            setTheme('light');
            document.documentElement.classList.remove('dark');

        }
    }

    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-h1 font-bold">devfinder</h1>
            <div className="flex gap-4 text-app-gray text-h3 font-bold tracking-widest uppercase">
                <p onClick={onThemeClick}>{theme === 'light' ? 'dark' : 'light'}</p>
                <img src={theme === 'light' ? moon : sun} alt="theme icon"></img>
            </div>
        </div>
    );
}

export default Header;