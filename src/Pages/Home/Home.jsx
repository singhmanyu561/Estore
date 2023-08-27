import React from 'react';
import './Home.css';
import Menu from '../../Component/Menu/Menu';
import MainContent from '../../Component/MainContent/MainContent';
import Services from '../../Component/Services/Services';
import Category from '../../Component/Category/Category';
import FeaturedProduct from '../../Component/FeaturedProduct/FeaturedProduct';
import NewsLetter from '../../Component/NewsLetter/NewsLetter';
import RecentProduct from '../../Component/RecentProduct/RecentProduct';
import Testimonial from '../../Component/Testimonial/Testimonial';

const Home = () => {
    return(
        <div className="Home">
            <div className='MenuCarousel'>
                <Menu/>
                <MainContent/>
            </div>
            <Category/>
            <FeaturedProduct/>
            <NewsLetter/>
            <RecentProduct/>
            <Testimonial/>
            <Services/>
        </div>
    );
}

export default Home;