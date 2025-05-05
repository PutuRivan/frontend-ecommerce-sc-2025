import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/Select';

const FilterProductCategory = () => {
  return (
    <div className="flex w-1/4 items-center justify-center p-10">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="frontend">Frontend</SelectItem>
          <SelectItem value="backend">Backend</SelectItem>
          <SelectItem value="fullstack">Fullstack</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterProductCategory;
