import React from 'react';
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const StyledContent = styled.div`
  max-width: var(--content-width);
  min-height: 100%;
  padding: 0;
  transition: padding ease-in-out 150ms;

  @media (min-width: 768px) {
    padding: 1.6rem;
  }
`;

const ContentWrapper = ({children}) => (
  <StyledContentWrapper>
    <StyledContent>
      {children}
    </StyledContent>
  </StyledContentWrapper>
);

ContentWrapper.propTypes = {};

ContentWrapper.defaultProps = {};

export default ContentWrapper;
