import styled from '@emotion/styled';
import Head from 'next/head';
import { baseLineHeight } from 'styles';
import { HeaderOne } from 'components/HeaderOne';
import { HeaderTwo } from 'components/HeaderTwo';
import { TextLink } from 'components/TextLink';

const Page: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <HeaderOne text="プライバシーポリシー" />
      <HeaderTwo text="広告の配信について" />
      <Paragraph>
        当サイトは第三者配信の広告サービス「Google Adsense
        グーグルアドセンス」を利用しています。
        <br />
        広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
        <br />
        Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は「
        <TextLink
          href="https://policies.google.com/technologies/ads?hl=ja"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          広告 – ポリシーと規約 – Google
        </TextLink>
        」をご覧ください。
        <br />
      </Paragraph>
      <HeaderTwo text="アクセス解析ツールについて" />
      <Paragraph>
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        <br />
        このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは
        <TextLink
          href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          ここをクリック
        </TextLink>
        してください。
      </Paragraph>
      <HeaderTwo text="免責事項" />
      <Paragraph>
        当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。
        <br />
        当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        <br />
        当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
        <br />
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div({});

const Paragraph = styled.div({
  lineHeight: baseLineHeight,
  marginBottom: 20,
});

export default Page;
