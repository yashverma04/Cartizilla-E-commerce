import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import '../Style/Navbar.css';

const Navbar = ({ cartCount, cartItems = [], setCartItems = () => {} }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    
    const searchRef = useRef(null);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };
        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSearchOpen]);

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim() !== "") {
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

    return (
        <header className="container mt-4">
            <div className="navbar-custom">
                {/* 1. Logo Section */}
                <div className="navbar-logo">
                    <h4>Cartzilla</h4>
                </div>

                {/* 2. Navigation Links (Fixed Center & Mobile Menu) */}
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Shop</a></li>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Account</a></li>
                    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>

                {/* 3. Icons & Search Section */}
                <div className="navbar-icons" ref={searchRef}>
                    <AnimatePresence>
                        {isSearchOpen && (
                            <motion.div 
                                className="search-wrapper-inside"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100%", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <input 
                                    className="search-input-small" 
                                    type="text" 
                                    placeholder="Search..." 
                                    autoFocus 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearch}
                                />
                                <FontAwesomeIcon 
                                    icon={faTimes} 
                                    className="close-icon-small" 
                                    onClick={() => setIsSearchOpen(false)} 
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Search Button */}
                    {!isSearchOpen && (
                        <button className="icon-btn" onClick={() => setIsSearchOpen(true)}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    )}

                    {/* Cart Button: Hide on mobile when search is open */}
                    <button 
                        className={`icon-btn position-relative ${isSearchOpen ? 'd-none d-lg-flex' : 'd-flex'}`} 
                        onClick={() => setIsCartOpen(true)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>

                    {/* Hamburger Menu: Hide on mobile when search is open */}
                    <button 
                        className={`icon-btn d-lg-none ${isSearchOpen ? 'd-none' : 'd-flex'}`} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Side Cart Drawer */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div className="cart-overlay" onClick={() => setIsCartOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                        <motion.div className="cart-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "tween", ease: "circOut", duration: 0.4 }}>
                            <div className="p-4 d-flex flex-column h-100">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="fw-bold m-0">Your Cart ({cartCount})</h5>
                                    <button className="btn p-0" onClick={() => setIsCartOpen(false)}><FontAwesomeIcon icon={faTimes} size="lg" /></button>
                                </div>
                                <div className="flex-grow-1 overflow-auto cart-items-list">
                                    {cartItems.length > 0 ? cartItems.map((item) => (
                                        <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                            <img src={item.image} alt={item.name} className="cart-item-img" />
                                            <div className="ms-3 flex-grow-1">
                                                <h6 className="mb-0 small fw-bold">{item.name}</h6>
                                                <span className="text-muted small">{item.quantity} x ₹{item.price.toLocaleString('en-IN')}</span>
                                            </div>
                                            <button className="btn text-danger btn-sm" onClick={() => removeFromCart(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                        </div>
                                    )) : <div className="text-center mt-5 text-muted"><p>Cart is empty</p></div>}
                                </div>
                                {cartItems.length > 0 && (
                                    <div className="mt-auto pt-3 border-top">
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="fw-bold">Total:</span>
                                            <span className="fw-bold text-danger">₹{subtotal.toLocaleString('en-IN')}</span>
                                        </div>
                                        <button className="btn btn-checkout w-100 py-3 rounded-pill fw-bold">PROCEED TO BUY</button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;