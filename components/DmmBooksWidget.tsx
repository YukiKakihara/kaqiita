import styled from '@emotion/styled';
import { isProduction } from 'utils/isProduction';

interface Props {
  className?: string;
  id: string;
}

export const DmmBooksWidget: React.FC<Props> = ({ className, id }) => {
  if (!isProduction) return <></>;

  return (
    <Wrapper className={className}>
      <ins
        className="dmm-widget-placement"
        data-id={id}
        style={{ background: 'transparent' }}
      ></ins>
      <script
        className="dmm-widget-scripts"
        data-id={id}
        src="https://widget-view.dmm.com/js/placement.js"
      ></script>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
