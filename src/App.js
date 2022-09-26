import React from 'react';
import './index.scss';
import UserList from "./components/Users/UserList";

// Тут список пользователей: https://reqres.in/api/users

function App() {
    return (
        <div className="App">
            <UserList/>
        </div>
    );
}

export default App;
