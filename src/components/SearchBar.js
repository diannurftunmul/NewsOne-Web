import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search/${query}`);
            setQuery('');
        }
    };

    return (
        <form className="d-flex shadow-sm" onSubmit={handleSearch}>
            <input
                type="text"
                className="form-control me-2"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
                GO
            </button>
        </form>
    );
};

export default SearchBar;