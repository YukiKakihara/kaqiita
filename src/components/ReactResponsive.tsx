import { ReactElement } from 'react';
import Responsive, { MediaQueryProps } from 'react-responsive';

export const Mobile = (
  props: MediaQueryProps
): ReactElement<MediaQueryProps> => <Responsive {...props} maxWidth={767} />;

export const NotMobile = (
  props: MediaQueryProps
): ReactElement<MediaQueryProps> => <Responsive {...props} minWidth={768} />;
