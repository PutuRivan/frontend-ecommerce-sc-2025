import React from 'react';
import Card from '../components/ui/card';
import FilterProductCategory from '../components/home/filter-product-category';

const Home = () => {
  return (
    <>
      <FilterProductCategory />
      <div className='grid grid-cols-3 place-items-center gap-4 gap-y-10'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
