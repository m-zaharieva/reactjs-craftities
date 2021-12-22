import { useHistory } from 'react-router-dom';

import './ListingDelete.css';
import * as listingService from './../../../services/listingService.js';
import { useNotificationContext } from './../../../contexts/NotificationContext.js';

function ListingDelete({ show, changeState, listingId, category }) {
    const { showNotification } = useNotificationContext();
    let history = useHistory();


    if (!show) {
        return (
            <></>
        );
    }

    const goBack = (e) => {
        e.preventDefault();
        changeState();
    }

    const deleteListingHandler = (e) => {
        e.preventDefault();
        listingService.deleteListing(listingId)
            .then(result => {
                if (result.error) {
                    throw result;
                }
                setTimeout(() => {
                    showNotification( 'Deleted', 'success');
                    history.push(`/c/${category}`);
                }, 1000);
            })
    }

    return (
        <section className='delete-section'>
            <div className='container row'>
                <div className='col-5 delete-dialog-box margin-auto'>
                    <div className='dialog-header'>
                        <h1>Delete this listing?</h1>
                        <p>You are about to delete this listing. Are you sure?</p>
                    </div>
                    <div className='delete-dialog-buttons'>
                        <button onClick={goBack}>Cancle</button>
                        <button onClick={deleteListingHandler}>Yes, delete it</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingDelete;