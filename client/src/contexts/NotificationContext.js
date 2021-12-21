import { useContext, createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();



export const NotificationProvider = ({ children }) => {



    return (
        <NotificationContext.Provider value={}>
            {children}
        </NotificationContext.Provider>
    );
}


export const useNotificationContext = () => {
    let state = useContext(NotificationContext);
    return state;
}
