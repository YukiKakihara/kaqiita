import styled from '@emotion/styled';
import { clickLogToGA } from 'utils/gtag';
import { Image } from 'components/Image';
import { TextLink } from 'components/TextLink';
import { Item } from './Item';

interface Props {
  className?: string;
}

export const Profile: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <Item title="プロフィール">
        <ImageWrapper>
          <Image src="/profile.png" />
        </ImageWrapper>
        <Name>YukiKakihara</Name>
        <LinkWrapper>
          <TextLink
            href="https://github.com/YukiKakihara"
            onClick={() => clickLogToGA('pc_sidebar_profile', 'github')}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            GitHub
          </TextLink>
        </LinkWrapper>
        <LinkWrapper>
          <TextLink
            href="https://twitter.com/KakkiiiiKyg"
            onClick={() => clickLogToGA('pc_sidebar_profile', 'twitter')}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Twitter
          </TextLink>
        </LinkWrapper>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div({});

const ImageWrapper = styled.div({
  marginBottom: 5,
  width: 50,
});

const Name = styled.div({
  marginBottom: 5,
});

const LinkWrapper = styled.div({
  marginBottom: 5,
});
