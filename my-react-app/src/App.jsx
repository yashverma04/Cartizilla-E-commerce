import React, { useState } from 'react'
import Navbar from './First Page/Navbar' 
import Banner from './First Page/Banner' 
import CategoriesSection from './First Page/CategoriesSection'
import Popularproducts from './First Page/Popularproducts'
import Interiordesign from './First Page/Interiordesign'
import Footer from './First Page/Footer'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      {/* Navbar ko Items aur Setter dono bhej rahe hain */}
      <Navbar 
        cartCount={totalItemsCount} 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
      />
      
      <Banner />
      <CategoriesSection /> 

      {/* Popularproducts ko Add function bhej rahe hain */}
      <Popularproducts addToCart={addToCart} /> 

      <Interiordesign />
      <Footer /> 
    </div>
  )
}

export default App;