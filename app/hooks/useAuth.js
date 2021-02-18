import { createContext } from 'react';
import jwtDecode from 'jwt-decode';

import AuthContext from '../context/auth';
import AuthStorage from './storage';

export default useAuth = () => {
    const { user, setUser } = createContext(AuthContext);

    const logIn = (token) => {
        const user = jwtDecode(token);
        setUser(user);
        AuthStorage.saveToken(token);
    }

    const logOut = () => {
        setUser(null);
        AuthStorage.removeToken()
    }

    return ({ use, logIn, logOut })
}