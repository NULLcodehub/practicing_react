import React from 'react';
import {Link} from 'react-router-dom'

import MainHeader from './MainHeader';
import './MainNavigation.css'
import NavLinks from './NavLinks';

const MainNavigation = (props) => {
    return (
        <>
            <MainHeader>
                <button>
                    <span>--</span>
                    <span>--</span>
                    <span>--</span>
                </button>
                <h1 className='main-navigation-title'> <Link to='/'>Your places</Link></h1>

                <nav>
                    <NavLinks/>
                </nav>
            </MainHeader>

        </>
    );
};

export default MainNavigation;