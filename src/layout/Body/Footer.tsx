import styled from '@emotion/styled';
import { mq } from 'utils/mediaQuery';
import { Colors } from 'constants/Colors';
import { TextLink } from 'components/TextLink';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Content>
        <TextLink href="/">ホーム</TextLink>
      </Content>
      <Content>
        <TextLink href="/inquiry">お問い合わせ</TextLink>
      </Content>
      <Content>
        <TextLink href="/privacy_policy">プライバシーポリシー</TextLink>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.footer(
  mq({
    borderTop: `1px solid ${Colors.border}`,
    display: ['block', 'flex'],
    justifyContent: 'space-between',
    padding: '30px 0',
  })
);

const Content = styled.div(
  mq({
    flex: 1,
    padding: ['5px 30px', 0],
    textAlign: ['left', 'center'],
  })
);
