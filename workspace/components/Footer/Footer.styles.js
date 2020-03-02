import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  background: #13293d;
  color: #fff;
`;

export const StyledFooterContent = styled.footer`
    margin: 0 auto;
    padding: 1.6rem 3.2rem;
    height: 100%;
    
    @media (min-width: 1024px) {
      max-width: 1024px;
    }
`;

export const StyledFooterAuthor = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & > div {
      margin: 0 1.2rem;
      width: 20px;
      height: 20px;
    }
`;
