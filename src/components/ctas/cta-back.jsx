import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const CTAback = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="flex gap-2 border p-2 btn btn-soft w-fit"
      >
        <ArrowLeft />
        <span>Back</span>
      </button>
    </>
  );
};

export default CTAback;
