import React from 'react';
import { useRouter } from 'next/router';

const Page: React.FC<any> = (props) => {
  const { blog } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>ok</div>;
};

export default Page;
