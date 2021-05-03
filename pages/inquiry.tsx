import styled from '@emotion/styled';
import { HeaderOne } from '../src/components/HeaderOne';
import { HeaderTwo } from '../src/components/HeaderTwo';
import { TextLink } from '../src/components/TextLink';

const Page: React.FC = () => {
  return (
    <Wrapper>
      <HeaderOne text="お問い合わせ" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeAcO0gzL183Zxxs1LCmCIKKO5YFUZjZjeVe1kg8Lb5dKlpLg/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        読み込んでいます…
      </iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div({});

export default Page;
