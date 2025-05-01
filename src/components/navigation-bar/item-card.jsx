import { Trash } from 'lucide-react';
import React from 'react';

const ItemCard = () => {
  return (
    <div className="flex gap-5 items-center mt-5">
      <figure className="h-20 w-20">
        <img src="https://placehold.co/400" alt="" />
      </figure>
      <div className="flex flex-col">
        <h1>Nama Item</h1>
        <p>harga</p>
      </div>
      <div>
        <p>jumlah</p>
      </div>
      <div className="cursor-pointer btn btn-circle">
        <Trash color="red" size={20} />
      </div>
    </div>
  );
};

export default ItemCard;
