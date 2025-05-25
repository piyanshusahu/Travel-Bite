import React from 'react';
import './HomePage.css';
import SeasonCategory from './SeasonCategory';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BudgetPage from '../../itenary/budget/BudgetPage';

function HomePage() {
    return ( 
        <div className="homepage" >
            <Hero />
            <SeasonCategory /> 
        </div>
     );
}

export default HomePage;