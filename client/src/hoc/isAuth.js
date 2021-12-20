import { useHistory } from 'react-router-dom';
import { useAuthContext } from './../contexts/AuthContext.js';

export function isAuth(Component) {

    function WrapperComponent (props) {
        const { user } = useAuthContext(); 
        const history = useHistory();

        if (!user.email) {
            history.push('/user/login')
            return null;
        }

        return  <Component {...props}/>;
    }

    return WrapperComponent;
    
}