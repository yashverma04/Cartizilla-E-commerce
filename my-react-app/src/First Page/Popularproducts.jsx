import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ensure 'motion' is referenced so ESLint recognizes it's used (no-op)
void motion;
import '../Style/Popularproducts.css';

import img1 from '../assets/01.png';
import img2 from '../assets/02.png';
import img3 from '../assets/03.png';
import img4 from '../assets/04.png';

const Popularproducts = ({ addToCart }) => { 
    const [showMore, setShowMore] = useState(false);

    const allProducts = [
        { id: 1, img: img1, name: "Bed frame light gray 140x200 cm", price: "₹63,500" },
        { id: 2, img: img2, name: "Modern Velvet Armchair", price: "₹37,800" },
        { id: 3, img: img3, name: "King Size Luxury Bed", price: "₹1,05,000" },
        { id: 4, img: img4, name: "Compact 3-Seater Sofa", price: "₹74,900" },
        { id: 5, img: img1, name: "Classic Wooden Chair", price: "₹9,999" },
        { id: 6, img: img2, name: "Premium Leather Sofa", price: "₹2,01,500" },
        { id: 7, img: img3, name: "Guest Room Single Bed", price: "₹46,200" },
        { id: 8, img: img4, name: "Minimalist Coffee Table", price: "₹17,500" },
    ];

    // Helper: String price ko number mein badalne ke liye (₹63,500 -> 63500)
    const handleAddToCart = (item) => {
        const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
        addToCart({
            id: item.id,
            name: item.name,
            price: numericPrice,
            image: item.img
        });
    };

    const handleToggle = (e) => {
        e.preventDefault();
        setShowMore(!showMore);
    };

    const slideVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
        }),
        exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
    };

    return (
        <section className="popular-section">
            <div className="popular-container">
                <div className="popular-header">
                    <h2>Popular products</h2>
                    <a href="#" className="view-all-link" onClick={handleToggle}>
                        {showMore ? "Show less <" : "View all >"}
                    </a>
                </div>

                <div className="products-grid">
                    {/* Top 4 Cards */}
                    {allProducts.slice(0, 4).map((item) => (
                        <motion.div key={item.id} whileHover={{ y: -10 }} className="product-card">
                            <div className="img-holder" style={{ overflow: 'hidden' }}>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="product-details">
                                <div className="color-dots">
                                    <span className="dot teal"></span>
                                    <span className="dot pink"></span>
                                    <span className="dot cream"></span>
                                </div>
                                <p className="p-name">{item.name}</p>
                                <h3 className="p-price">{item.price}</h3>
                                <motion.button 
                                    whileTap={{ scale: 0.95 }}
                                    className="add-cart-btn"
                                    onClick={() => handleAddToCart(item)} // Data pass kiya
                                >
                                    Add to cart
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}

                    {/* Bottom 4 Cards (Show More) */}
                    <AnimatePresence>
                        {showMore && allProducts.slice(4, 8).map((item, index) => (
                            <motion.div 
                                key={item.id}
                                custom={index}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover={{ y: -10 }}
                                className="product-card"
                            >
                                <div className="img-holder" style={{ overflow: 'hidden' }}>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="product-details">
                                    <div className="color-dots">
                                        <span className="dot teal"></span>
                                        <span className="dot pink"></span>
                                        <span className="dot cream"></span>
                                    </div>
                                    <p className="p-name">{item.name}</p>
                                    <h3 className="p-price">{item.price}</h3>
                                    <motion.button 
                                        whileTap={{ scale: 0.95 }}
                                        className="add-cart-btn"
                                        onClick={() => handleAddToCart(item)} // Data pass kiya
                                    >
                                        Add to cart
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Popularproducts;