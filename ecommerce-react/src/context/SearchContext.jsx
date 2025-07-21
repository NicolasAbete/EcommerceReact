import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch debe ser usado dentro de SearchProvider');
    }
    return context;
};

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <SearchContext.Provider value={{
            searchQuery,
            updateSearchQuery,
            clearSearch
        }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;