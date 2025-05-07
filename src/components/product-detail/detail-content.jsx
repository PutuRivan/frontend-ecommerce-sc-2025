import React, { useEffect, useState } from 'react';
import CardAction from './card-action';
import { Star } from 'lucide-react';

const DetailContent = ({ id }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/product/${id}`
        );
        const data = await response.json();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-row gap-5 mt-10 items-center justify-center">
      <figure>
        <img src={Data.product_thumbnail} alt="" className="rounded-xl" />
      </figure>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">{Data.product_name}</h1>
          <p className="font-semibold flex flex-row gap-5 text-xl">
            Rp. 30.000
            <span className="flex flex-row gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
          </p>
          <div className="flex flex-row gap-2">
            {Data.ProductCategory?.map((item, index) => (
              <span key={index} className="badge badge-info badge-md">
                {item.category.category_name}
              </span>
            ))}
          </div>
          <div className="mt-5 w-96">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              doloremque fugit saepe dolores eum suscipit adipisci distinctio
              ullam consequatur accusantium commodi expedita reiciendis rem, a
              aspernatur incidunt optio? Suscipit, aliquid?
            </p>
          </div>
        </div>
        <CardAction />
      </div>
    </div>
  );
};

export default DetailContent;
