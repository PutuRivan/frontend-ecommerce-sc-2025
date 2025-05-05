import { useEffect, useState } from 'react';
import { AuthContext } from '../context/auth-context';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false);
    }, []);

    const signUp = async (form) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/new`, {
                method: 'POST',
                body: form,
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            console.log(form);
        } catch (error) {
            console.error(error);
        }
    };

    const login = async (form) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setUser(data.data);
            sessionStorage.setItem('user', JSON.stringify(data.data));
            sessionStorage.setItem('token', JSON.stringify(data.token));
            return true;
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, signUp, login, logout, isAuthenticated: !!user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
