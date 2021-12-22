
import './ValidationError.css';

function ValidationError({
    message,
}) {
       
    return (
        <div className="alert danger">
            <p className='message-danger'>{message}</p>
        </div>
    )
}

export default ValidationError;