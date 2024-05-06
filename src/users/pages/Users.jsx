import React from 'react';
import UserList from '../component/UserList'

const Users = () => {

    const USER=[

        {
            id:'u1',
            name:'Isshan',
            image:'https://unsplash.com/photos/empowerment-healthy-lifestyle-relaxation-balance-or-harmony-concept-calm-woman-practice-yoga-meditation-in-hall-lotus-pose-for-less-stress-and-reaching-nirvana-or-zen-cartoon-vector-illustration-6je9XHtxWQ8',
            places:1
            
        }
    ]

    return (

        <UserList items={USER} />
    );
};

export default Users;