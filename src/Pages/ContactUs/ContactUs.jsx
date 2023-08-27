import React from 'react';
import './ContactUs.css';
import OurOffice from './OurOffice/OurOffice';
import OurStore from './OurStore/OurStore';
import ContactForm from './ContactForm/ContactForm';
import MapLocation from './MapLocation/MapLocation';

const ContactUs = () => {
    return(
        <div className="ContactUs">
            <div className='ContactAddress'>
                <OurOffice/>
                <OurStore/>
                <ContactForm/>
            </div>
            <div className='ContactLocation'>
                <MapLocation/>
            </div>
        </div>
    );
}

export default ContactUs;