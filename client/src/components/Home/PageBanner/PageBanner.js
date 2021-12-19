import { useContext } from 'react';

import './PageBanner.css';
import { AuthContext } from '../../../contexts/AuthContext';


function PageBanner() {
    let { user } = useContext(AuthContext);
    
    return (
        <section className="banner-section">
            <div className="page-banner">
                <div className="banner-image-holder">
                    <img src="/img/home-banner-girl.png" alt="" />
                </div>

                <div className="banner-content">
                    <div className="container">
                        {user.firstName 
                        ? <h1>{user.firstName} {user.lastName},<br/> Wellcome to Craftities.</h1>
                        : <h1>Wellcome to Craftities.<br/>We give your work a space to shine.</h1>
                         }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PageBanner;