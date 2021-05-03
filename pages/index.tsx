import styled from '@emotion/styled';
import { client } from 'utils/api';

const Page: React.FC = () => {
  return <Wrapper>準備中...</Wrapper>;
};

const getBlog = async () => {
  try {
    const blogs = await client.v1.blogs.$get();
    return {
      blogs,
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true };
  }
};

const Wrapper = styled.div({});

export default Page;
