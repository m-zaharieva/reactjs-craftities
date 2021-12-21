import './Notification.css';
import { useNotificationContext } from './../../../contexts/NotificationContext.js'

function Notification() {
    const { notification } = useNotificationContext();
    
    if (!notification.show) {
        return null
    }

    return (
        <div className={`notification ${notification.type}`}>
            <p>{notification.message}</p>
        </div>
    );
}

export default Notification;