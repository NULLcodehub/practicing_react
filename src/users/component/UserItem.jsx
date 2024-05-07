import React from 'react';
import {Link} from 'react-router-dom'

import './userItem.css'

const UserItem = (props) => {
    return (
        <>  
            <li className='user-item'>
                <div className='user-item-content'>
                    <Link to={`/${props.id}/places`}>
                        <div className='user-item-image'>
                            <img src={props.image} alt={props.name} />
                        </div>
                        <div className='user-item-info'>
                            <h3>{props.name}</h3>
                            <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                        </div>
                    </Link>
                </div>
            </li>
        </>
    );
};

export default UserItem;