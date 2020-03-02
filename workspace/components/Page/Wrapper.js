import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  padding-top: var(--header-height);

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Wrapper = ({children}) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = {};

Wrapper.defaultProps = {};

export default Wrapper;
