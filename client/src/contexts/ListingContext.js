import { createContext, useState } from 'react';

const ListingContext = createContext();

export default ListingContext;



export const ListingProvider = ({
    children
}) => {
    let [listing, setListing] = useState({});

    const setListingContext = (data) => {
        return setListing(data);
    }

    return (
        <ListingContext.Provider value={{ listing, setListingContext }}>
            {children}
        </ListingContext.Provider>
    );
}

