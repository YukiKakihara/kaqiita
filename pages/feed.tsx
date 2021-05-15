import { GetServerSidePropsContext } from 'next';
import { generateFeedXml } from 'utils/generateFeedXml';

const Page = () => null;

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const { xml } = await generateFeedXml();

  res.statusCode = 200;
  // 24時間のキャッシュ
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

export default Page;
