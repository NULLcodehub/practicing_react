import React from 'react';
import UserItem from './UserItem';
import './userList.css'

const UserList = (porps) => {
    if(props.items.length === 0){
        return (
            <>
                <div className='center'>
                    <h1>No Users Found.</h1>
                </div>
            </>
        );
    }

    return (

        <>
            <ul>
                {props.items.map(user => (
                 <UserItem key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                 
                 />
                 ))}
                 
            </ul>
        </>

    );
};

export default UserList;