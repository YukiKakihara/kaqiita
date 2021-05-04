import styled from '@emotion/styled';
import { Colors } from 'constants/Colors';

interface Props {
  className?: string;
}

export const InquiryForm: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeAcO0gzL183Zxxs1LCmCIKKO5YFUZjZjeVe1kg8Lb5dKlpLg/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        読み込んでいます…
      </Iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: Colors.white,
  content: '""',
  display: 'block',
  height: 950,
  paddingTop: '80%',
  position: 'relative',
  width: '100%',
});

const Iframe = styled.iframe({
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
});
