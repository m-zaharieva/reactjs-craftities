import { useHistory } from 'react-router-dom';

import { useAuthContext } from './../contexts/AuthContext.js';
import { useListingContext } from '../contexts/ListingContext.js';


export function isOwner(Component) {

    function WrapperComponent (props) {
        const { user } = useAuthContext(); 
        const { listing } = useListingContext(); 
        const history = useHistory();
        
        
        if (user._id !== listing.author?._id) {
            history.push('/user/login')
            return null;
        }

        return  <Component {...props}/>;
    }

    return WrapperComponent;
    
}