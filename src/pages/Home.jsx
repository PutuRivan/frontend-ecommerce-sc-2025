import React, { useEffect, useState } from 'react';
import Card from '../components/ui/card';
import FilterProductCategory from '../components/home/filter-product-category';

const Home = () => {
  const [Data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const data = await response.json();
        setData(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <FilterProductCategory />
      <div className="grid grid-cols-3 place-items-center gap-4 gap-y-10">
        {Data.map((item, index) => (
          <Card key={index} id={item.id_product} nama={item.product_name} image={item.product_thumbnail} harga={item.price_range} />
        ))}
      </div>
    </>
  );
};

export default Home;
