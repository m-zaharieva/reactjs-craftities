import { createContext, useState, useContext } from 'react';

const ListingContext = createContext();

export default ListingContext;



export const ListingProvider = ({
    children
}) => {
    let [listing, setListing] = useState({});

    const listingContext = (data) => {
        return setListing(data);
    }

    return (
        <ListingContext.Provider value={{ listing, listingContext }}>
            {children}
        </ListingContext.Provider>
    );
}

export const useListingContext = () => {
    const listingState = useContext(ListingContext);
    return listingState;
}

