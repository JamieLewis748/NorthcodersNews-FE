import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Contexts/Users';
import { fetchUsers } from '../api';

const ToggleUser = () => {
    const { user, setUser } = useContext(UserContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers()
            .then((users) => {
                setUsers(users);
            });
    }, []);

    const toggleUser = (event) => {
        const selectedUsername = event.target.value;
        const selectedUser = users.find((user) => user.username === selectedUsername);
        setUser(selectedUser);
    };

    return (
        <div className="user-dropdown">
            <select id="userSelect" value={user} onChange={toggleUser} >
                <option key={"notSignedIn"}>No User Selected</option>
                {users.map((user) => (
                    <option key={user.username} value={user.username}>
                        {user.name}
                    </option>
                ))}
            </select>
            {user && <img src={user.avatar_url} alt={user.username} className="user-avatar" />}
        </div>
    );
};

export default ToggleUser;