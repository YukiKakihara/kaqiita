import styled from '@emotion/styled';
import { HeaderOne } from 'components/HeaderOne';
import { TextLink } from 'components/TextLink';

interface Props {
  className?: string;
}

export const AboutBlog: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <HeaderOne text="このブログについて" />
      <Body>
        このブログは{' '}
        <TextLink
          href="https://nextjs.org"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Next.js
        </TextLink>
        ・
        <TextLink
          href="https://microcms.io"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          microCMS
        </TextLink>
        ・
        <TextLink
          href="https://vercel.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Vercel
        </TextLink>{' '}
        で動いています。
        <br />
        <br />
        <TextLink
          href="https://github.com/YukiKakihara/kaqiita"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          https://github.com/YukiKakihara/kaqiita
        </TextLink>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div({});

const Body = styled.div({});
