import React, {useEffect, useState} from 'react';
import './index.scss';
import UserList from "./components/Users/UserList";
import Success from "./components/Success";

// Тут список пользователей: https://reqres.in/api/users

const App = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [invites, setInvites] = useState([]);
    const [success, setSuccess] = useState(false);

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

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => !_id));
        } else  {
            setInvites(prev => [...prev, id])
        }
    };

    const onSendInvites = () => {
        setSuccess(true);
    }

    return (
        <div className="App">
            {
                success ? (
                    <Success count={invites.length}/>
                ) :
                    (
                        <UserList
                            items={users}
                            isLoading={isLoading}
                            searchValue={searchValue}
                            changeSearchValue={changeSearchValue}
                            invites={invites}
                            onClickInvite={onClickInvite}
                            onSendInvites={onSendInvites}
                        />

                    )
            }
        </div>
    );
}

export default App;
