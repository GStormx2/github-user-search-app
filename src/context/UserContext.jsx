import React, { useContext, useState } from 'react';

const UserContext = React.createContext();

export const useUserData = () => {
    return useContext(UserContext);
}
export const ContextProvider = ({children}) => {
    const [userData, setUserData] = useState({});
    const [status, setStatus] = useState('init');
    const value = {
        userData,
        setUserData,
        status,
        setStatus
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}