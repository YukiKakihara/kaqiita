import styled from '@emotion/styled';
import { isProduction } from 'utils/isProduction';
import { Item } from '../layout/Sidebar/Item';

interface Props {
  className?: string;
  id: string;
}

export const DmmBooksWidget: React.FC<Props> = ({ className, id }) => {
  if (!isProduction) return <></>;

  return (
    <Wrapper className={className}>
      <Item>
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
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
