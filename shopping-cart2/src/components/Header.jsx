import React from 'react';
import Styles from '/src/styles/Header.module.css';
import {Link} from 'react-router';
import {useContext} from 'react';
import CartContext from './CartContext';
import {calculateNumberOfItems} from './Utility.jsx';

const Header = ()=> {
    const {cartItems} = useContext(CartContext);
    return (
        <header className = {Styles.header}>
            <nav>
                <ul>
                    <li>
                        <Link to ={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to ={'/ShoppingPage'}>Shop</Link>
                    </li>
                    <li>
                        <h1 className = {Styles.logo}>Outfique</h1>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <Link to ={'/CheckoutPage'}>Checkout
                        <p className = {Styles.items}>{calculateNumberOfItems(cartItems)}</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;