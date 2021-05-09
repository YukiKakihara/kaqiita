import styled from '@emotion/styled';
import Head from 'next/head';
import { isProduction } from 'utils/isProduction';
import { Colors } from 'constants/Colors';
import { DmmBooksWidgetIds } from 'constants/DmmBooksWidgetIds';
import { Profile } from './Profile';
import { Advertisement } from './Advertisement';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ className }) => {
  const id = DmmBooksWidgetIds['001'];

  return (
    <Wrapper className={className}>
      {isProduction && (
        <Head>
          <script
            className="dmm-widget-scripts"
            data-id={id}
            src="https://widget-view.dmm.com/js/placement.js"
          ></script>
        </Head>
      )}
      <Profile />
      {isProduction && <Advertisement id={id} />}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: Colors.darkBackground,
  borderRight: `1px solid ${Colors.border}`,
  padding: 30,
});
