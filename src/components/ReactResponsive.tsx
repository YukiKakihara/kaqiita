import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }) => {
  return useMediaQuery({ maxWidth: 767 }) ? children : null;
};

const NotMobile = ({ children }) => {
  return useMediaQuery({ minWidth: 768 }) ? children : null;
};
