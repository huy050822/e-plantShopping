import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Đảm bảo đường dẫn đúng

function ProductList() {
  const dispatch = useDispatch();
  
  const plantsArray = [
    { category: "Indoor", name: "Snake Plant", price: 20, thumbnail: "snake_plant.jpg" },
    { category: "Indoor", name: "Spider Plant", price: 15, thumbnail: "spider_plant.jpg" },
    // ... thêm đủ 6 cây mỗi loại
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      {/* Giả sử bạn nhóm theo category */}
      <h2>Indoor Plants</h2>
      <div className="plant-grid">
        {plantsArray.map((plant, index) => (
          <div key={index} className="plant-card">
            <img src={plant.thumbnail} alt={plant.name} style={{width: '100px'}} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
