import React, { useEffect, useState } from 'react';
import CTAback from '../components/ctas/cta-back';
import DetailContent from '../components/product-detail/detail-content';
import Card from '../components/ui/card';
import { useParams } from 'react-router';

const Product = () => {
  const { id } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products`
        );
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
      <div className="p-5 flex flex-col">
        <CTAback />
        <DetailContent id={id} />
        <div className="flex flex-col gap-5 mt-10">
          <h1 className="text-3xl font-semibold">Recomendation</h1>
          <div className="flex flex-row flex-wrap gap-10 justify-evenly">
            {Data.slice(0, 3).map((item, index) => (
              <Card
                key={index}
                id={item.id_product}
                nama={item.product_name}
                image={item.product_thumbnail}
                harga={item.price_range}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
