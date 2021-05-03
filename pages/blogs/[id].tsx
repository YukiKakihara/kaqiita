import React from 'react';
import { useRouter } from 'next/router';
import { useBlog } from 'hooks/blogs/[id]/useBlog';
import { HeaderOne } from 'components/HeaderOne';

const Page: React.FC<any> = () => {
  const router = useRouter();
  const { id: blogId } = router.query;
  const { blog, blog: { body, title } } = useBlog(blogId as string);

  if (router.isFallback || !blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderOne text={title} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default Page;
