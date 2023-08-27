import React from 'react';
import './Footer.css';
import FooterMainContent from './FooterMainContent/FooterMainContent';
import PaymentBar from './PaymentBar/PaymentBar';
import Copyright from './Copyright/Copyright';

const Footer = () => {
    return(
        <div className="Footer">
            <FooterMainContent/>
            <PaymentBar/>
            <Copyright/>
        </div>
    );
}

export default Footer;