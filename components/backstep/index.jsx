import React from 'react';
import Img from '../common/img';
import { useRouter } from 'next/router';

const Backstep = () => {
  const router = useRouter();

  return (
    <Img
      src="/assets/svg/arrow_back.svg"
      alt="back"
      role="button"
      c="pointer"
      onClick={() => router.back()}
    />
  );
};

export default Backstep;
