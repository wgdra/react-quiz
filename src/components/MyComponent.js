import React, { useState } from 'react';

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            {id: 1, name: "", age: ""},
            {id: 2, name: "", age: ""},
            {id: 3, name: "", age: ""},
        ]
    );

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    };

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone);
    };

    return (
        <>

        </>
    );
}

export default MyComponent;