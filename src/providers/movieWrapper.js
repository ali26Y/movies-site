import React, { useState, createContext } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [movies, setMovie] = useState(undefined);
    const [userMovie, setUserMovie] = useState(undefined);
    const [errors, setErrors] = useState(undefined);
    const [loading, setLoading] = useState(undefined);
    return (
        <SearchContext.Provider 
            value={{   
                movies, 
                setMovie, 
                errors, 
                setErrors, 
                loading, 
                setLoading, 
                userMovie, 
                setUserMovie 
        }}>
            {children}
        </SearchContext.Provider>
    );
};
