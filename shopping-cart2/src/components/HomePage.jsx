import React from 'react';
import {Link} from 'react-router';
import Styles from '/src/styles/Homepage.module.css';

const HomePage = () => {
    return (
        <section className ={Styles.homepage}>
            <div>
                <div>
                    <h1>Elavate Your Everyday Style</h1>
                    <p>Discover curated fashion and accessories designed to to move with you - effortlessly bold, always in season. </p>
                </div>
                <Link to ={'/ShoppingPage'} className = {Styles['go-to-shop-btn']}>Shop Now</Link>
            </div>
        </section>
    );

}
export default HomePage;