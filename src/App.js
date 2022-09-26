import React, {useEffect, useState} from 'react';
import './index.scss';
import UserList from "./components/Users/UserList";

// Тут список пользователей: https://reqres.in/api/users

const App = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch(`https://reqres.in/api/users`)
            .then(response => response.json())
            .then(json => {
                setUsers(json.data)
            }).catch(err => {
            console.log('error')
        }).finally(() => setLoading(false));
    }, []);

    const changeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }


    return (
        <div className="App">
            <UserList
                items={users}
                isLoading={isLoading}
                searchValue={searchValue}
                changeSearchValue={changeSearchValue}
            />
        </div>
    );
}

export default App;
