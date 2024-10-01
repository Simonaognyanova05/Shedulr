import { useState, useEffect, createContext, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    username: '',
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    const onRegister = (authData) => {
        setUser(authData);
        localStorage.setItem('user', JSON.stringify(authData));
    };

    return (
        <AuthContext.Provider value={{ user, onRegister }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    let authResult = useContext(AuthContext);

    return authResult;
}