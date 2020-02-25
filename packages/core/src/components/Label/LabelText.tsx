import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import {StyledLabelText} from './Label.styles';

interface LabelText {
  children: React.ReactNode;
  disabled?: boolean;
  userSelect?: boolean;
}

const Label: React.FC<LabelText> = ({
  children,
  disabled = false,
  userSelect = false
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledLabelText disabled={disabled} userSelect={userSelect} theme={theme}>
      {children}
    </StyledLabelText>
  );
};

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
