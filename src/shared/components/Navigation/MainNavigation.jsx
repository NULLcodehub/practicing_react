import {React, useState} from 'react';
import {Link} from 'react-router-dom'

import MainHeader from './MainHeader';
import './MainNavigation.css'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

const MainNavigation = (props) => {

    const [drawerIsOpen,setDrawerIsOpen]=useState(false)

    const openDrawer=()=>{
        setDrawerIsOpen(true)
    }
    const closeDrawer=()=>{
        setDrawerIsOpen(false)
    }

    return (
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
            {drawerIsOpen && (<SideDrawer>
                <NavLinks/>
            </SideDrawer>)}
            <MainHeader>
                <button onClick={openDrawer}>
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