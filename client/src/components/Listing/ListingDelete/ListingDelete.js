import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ListingDelete.css';
import * as listingService from './../../../services/listingService.js';

function ListingDelete({ show, changeState, listingId, category }) {
    let [message, setMessage] = useState('');
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
            .then(response => {
                setMessage(response);

                setTimeout(() => {
                    history.push(`/c/${category}`);
                }, 2000);
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
                        <a href="" onClick={goBack}>Cancle</a>
                        <a href="" onClick={deleteListingHandler}>Yes, delete it</a>
                    </div>
                    <div className='dialog-messages'>
                        {message.status && (message.status
                            ? <p className='successfull'>Status green message</p>
                            : <p className='failed'>Status red message</p>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingDelete;