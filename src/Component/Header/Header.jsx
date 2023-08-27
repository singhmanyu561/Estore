import React from 'react';
import './Header.css';
import ContactBar from './ContactBar/ContactBar';
import Appbar from './Appbar/Appbar';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    return(
        <div className="Header">
            <ContactBar/>
            <Appbar/>
            <SearchBar/>
        </div>
    );
}

export default Header;