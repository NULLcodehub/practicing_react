import React from 'react';
import ReactDom from 'react-dom'
const Backdrop = (props) => {
    return (
        ReactDom.createPortal(<div className='Backdrop' onClick={props.onClick}></div>,document.getElementById('backDrop-hook'))
    );
};

export default Backdrop;