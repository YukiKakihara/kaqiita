import styled from '@emotion/styled';
import { isProduction } from 'utils/isProduction';
import { Item } from './Item';

interface Props {
  className?: string;
}

export const DmmBooksWidget: React.FC<Props> = ({ className }) => {
  if (!isProduction) return <></>;

  return (
    <Wrapper className={className}>
      <Item>
        <ins
          className="dmm-widget-placement"
          data-id="3f1c1987da72d3343eec456648cf2037"
          style={{ background: 'transparent' }}
        ></ins>
        <script
          className="dmm-widget-scripts"
          data-id="3f1c1987da72d3343eec456648cf2037"
          src="https://widget-view.dmm.com/js/placement.js"
        ></script>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
