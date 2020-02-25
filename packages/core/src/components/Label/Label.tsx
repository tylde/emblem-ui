import React from 'react';

import {StyledLabel} from './Label.styles';

interface Label extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  disabled?: boolean;
  inline?: boolean,
}

const Label: React.FC<Label> = ({
  children,
  disabled = false,
  inline = false,
  ...otherProps
}) => (
  <StyledLabel block={!inline} inline={inline} disabled={disabled} {...otherProps}>
    {children}
  </StyledLabel>
);

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
