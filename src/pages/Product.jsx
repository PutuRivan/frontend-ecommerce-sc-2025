import React from 'react';
import CTAback from '../components/ctas/cta-back';
import DetailContent from '../components/product-detail/detail-content';
import Card from '../components/ui/card';

const Product = () => {
  return (
    <>
      <div className="p-5 flex flex-col">
        <CTAback />
        <DetailContent />
        <div className="flex flex-col gap-5 mt-10">
          <h1 className="text-3xl font-semibold">Recomendation</h1>
          <div className="flex flex-row flex-wrap gap-10 justify-evenly">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
