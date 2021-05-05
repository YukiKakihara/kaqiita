import styled from '@emotion/styled';
import Head from 'next/head';
import { isProduction } from 'utils/isProduction';
import { Colors } from 'constants/Colors';
import { Profile } from './Profile';
import { DmmBooksWidget } from './DmmBooksWidget';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      {isProduction && (
        <Head>
          <script
            className="dmm-widget-scripts"
            data-id="3f1c1987da72d3343eec456648cf2037"
            src="https://widget-view.dmm.com/js/placement.js"
          ></script>
        </Head>
      )}
      <Profile />
      {isProduction && <DmmBooksWidget />}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: Colors.darkBackground,
  borderRight: `1px solid ${Colors.border}`,
  padding: 30,
});
