import React from 'react';
import styled from 'styled-components';

const StyledFormRow = styled.div`
  margin-bottom: 1.6rem;
  
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

interface FormRow extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FormRow: React.FC<FormRow> = ({
  children,
  ...props
}) => (
  <StyledFormRow {...props}>
    {children}
  </StyledFormRow>
);

export default FormRow;
