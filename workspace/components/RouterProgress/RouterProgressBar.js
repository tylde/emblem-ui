import React from 'react';

import {StyledRouterProgressBar, StyledRouterProgressBarIndicator} from './RouterProgress.styles';

const RouterProgressBar = ({isFinished, progress}) => (
  <StyledRouterProgressBar>
    {!isFinished && <StyledRouterProgressBarIndicator progress={progress} />}
  </StyledRouterProgressBar>
);

RouterProgressBar.propTypes = {};

RouterProgressBar.defaultProps = {};

export default RouterProgressBar;
