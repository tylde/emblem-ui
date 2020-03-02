import React from 'react';
import styled from 'styled-components';
import {useTheme} from '@emblem-ui/styles';

const StyledMain = styled.main`
  min-height: 100%;
  padding: 3.2rem 1.6rem;
  background: ${(props) => props.theme.app.background.primary};
  border-radius: 0;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.05);
  transition: padding ease-in-out 150ms;

  @media (min-width: 768px) {
    border-radius: 4px;
    padding: 1.6rem;
  }
`;

const Main = ({children}) => {
  const theme = useTheme();
  return (
    <StyledMain theme={theme}>
      {children}
    </StyledMain>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
