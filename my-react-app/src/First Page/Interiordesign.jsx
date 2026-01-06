import React, { useState } from 'react';
import "../Style/Interiordesign.css";

import int1 from "../assets/06.png"; 
import int2 from "../assets/07.png"; 
import int3 from "../assets/08.png"; 
import int4 from "../assets/09.png"; 

const Interiordesign = () => {
    const [activeTab, setActiveTab] = useState('Living room');
    const categories = ['Living room', 'Bedroom', 'Kitchen', 'Decoration', 'Office'];

    return (
        <section className="interior-section">
            <div className="interior-container">
                <h2 className="interior-title">Interior design and inspiration</h2>
                
                <div className="filter-tabs">
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Updated Grid Layout matching Frame 170.jpg */}
                <div className="bento-grid">
                    {/* Image 1: Top Left */}
                    <div className="grid-item item-1">
                        <img src={int1} alt="Living Room" />
                    </div>
                    
                    {/* Image 2: Top Right */}
                    <div className="grid-item item-2">
                        <img src={int3} alt="Bedroom" /> 
                    </div>

                    {/* Image 3: Bottom Left */}
                    <div className="grid-item item-3">
                        <img src={int2} alt="Sofa Set" />
                    </div>

                    {/* Image 4: Bottom Right */}
                    <div className="grid-item item-4">
                        <img src={int4} alt="Decoration" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interiordesign;