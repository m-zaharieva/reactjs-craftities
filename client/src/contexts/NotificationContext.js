import { useContext, createContext, useState, useCallback } from 'react';



export const NotificationContext = createContext();

export const notificationType = {
    error: 'error',
    warning: 'warning',
    info: 'info',
    success: 'success',
}

const initialNotificationState = {show: false, message: '', type: notificationType.error};

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(initialNotificationState);

    const showNotification = useCallback((message, type = notificationType.error) => {
        setNotification({show: true, message, type});

        setTimeout(() => {
            setNotification(initialNotificationState)
        }, 5000);
    }, []);

    const hideNotification = useCallback(() => {
        setNotification(initialNotificationState);
    }, []);

    return (
        <NotificationContext.Provider value={{notification, showNotification, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotificationContext = () => {
    let state = useContext(NotificationContext);
    return state;
}
