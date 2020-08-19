import React from 'react';

const ProductCard = () => {
  return (
    <div>
      <header>
        <h3>Card Title</h3>
        <div>
          <p>Product description</p>
        </div>
        <footer>
          <button type="button">Add to Cart</button>
          <button type="button">Remove from Cart</button>
        </footer>
      </header>
    </div>
  );
};
export default ProductCard;
