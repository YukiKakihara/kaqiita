import styled from '@emotion/styled';
import { Image } from 'components/Image';
import { TextLink } from 'components/TextLink';
import { Item } from './Item';

interface Props {
  className?: string;
}

export const DmmBooksWidget: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <Item>
        <ins
          className="dmm-widget-placement"
          data-id="3f1c1987da72d3343eec456648cf2037"
          style={{ background: 'transparent' }}
        ></ins>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
