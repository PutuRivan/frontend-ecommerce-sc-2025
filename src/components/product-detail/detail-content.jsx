import React from 'react';
import CardAction from './card-action';
import { Star } from 'lucide-react';

const DetailContent = () => {
  return (
    <div className="flex flex-row gap-5 mt-10 items-center justify-center">
      <figure>
        <img src="https://placehold.co/400" alt="" className="rounded-xl" />
      </figure>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Nama Product</h1>
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
          <span className="badge badge-info badge-md">Category</span>
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
