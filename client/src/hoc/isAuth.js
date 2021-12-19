import { useHistory } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext.js';

export function isAuth(Component) {

    function WrapperComponent (props) {
        const { user } = useAuth(); 
        const history = useHistory();

        if (!user.email) {
            history.push('/user/login')
            return null;
        }

        return  <Component {...props}/>;
    }

    return WrapperComponent;
    
}