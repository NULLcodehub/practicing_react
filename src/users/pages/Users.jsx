import React from 'react';
import UserList from '../component/UserList'

const Users = () => {

    const USER=[

        {
            id:'u1',
            name:'Isshan',
            image:'https://images.app.goo.gl/avsjQwVwa5893hXMA',
            places:1
            
        }
    ]

    return (

        <UserList items={USER} />
    );
};

export default Users;