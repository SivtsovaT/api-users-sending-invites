import React, {useEffect, useState} from 'react';
import './index.scss';
import UserList from "./components/Users/UserList";

// Тут список пользователей: https://reqres.in/api/users

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://reqres.in/api/users`)
            .then(response => response.json())
            .then(json => {
                setUsers(json.data)
            }).catch(err => {
            console.log('error')
        });
    }, []);


    return (
        <div className="App">
            <UserList
                items={users}

            />
        </div>
    );
}

export default App;
