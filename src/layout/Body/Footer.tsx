import styled from '@emotion/styled';
import { Colors } from '../../constants/Colors';
import { TextLink } from '../../components/TextLink';

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

const Wrapper = styled.footer({
  borderTop: `1px solid ${Colors.border}`,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px 0',
});

const Content = styled.div({
  flex: 1,
  textAlign: 'center',
});
