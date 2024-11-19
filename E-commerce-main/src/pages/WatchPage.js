// src/pages/WatchPage.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../components/All_Products';

const WatchPage = () => {
  const watches = products.filter(product => product.category.toLowerCase() === 'watch');

  return (
    <div className="p-4 my-20 ">
      <h1 className="text-3xl font-bold mb-4">Watches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:w-2/3  m-auto">
        {watches.map(watch => (
          <ProductCard key={watch.id} product={watch} />
        ))}
      </div>
    </div>
  );
}

export default WatchPage;
