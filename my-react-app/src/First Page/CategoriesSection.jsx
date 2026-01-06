import React from 'react';
// Sahi Path Link
import '../Style/CategoriesSection.css';

// 1. IMAGES IMPORT: Assets folder se images yahan import karein
import livingRoomImg from '../assets/01.png'; 
import bedroomImg from '../assets/03.png';
import bathroomImg from '../assets/02.png'; // Maan lijiye 03 bathroom ke liye hai
// Agar 4th image nahi hai toh abhi ke liye 01 hi use kar rahe hain
import decorationImg from '../assets/05.png'; 

const CategoriesSection = () => {
    // 2. DATA ARRAY: Imported variables ko yahan assign karein
    const categories = [
        { id: 1, name: 'Living room', img: livingRoomImg },
        { id: 2, name: 'Bedroom', img: bedroomImg },
        { id: 3, name: 'Bathroom', img: bathroomImg },
        { id: 4, name: 'Decoration', img: decorationImg },
    ];

    return (
        <section className="categories-wrapper py-5">
            <div className="container">
                <div className="category-row">
                    {categories.map((cat) => (
                        <div key={cat.id} className="category-item">
                            <div className="circle-box shadow-sm">
                                {/* 3. SRC me imported variable pass karein */}
                                <img src={cat.img} alt={cat.name} className="img-fluid" />
                            </div>
                            <p className="cat-text">{cat.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;