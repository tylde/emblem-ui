import React, {useMemo} from 'react';

const RouterProgressBar = ({isFinished, progress}) => {
  const style = useMemo(() => ({width: `${100 * progress}%`}), [progress]);
  return (
    <div className='router-progress-bar'>
      {!isFinished && <div className='router-progress-bar__indicator' style={style} />}
    </div>
  );
};

RouterProgressBar.propTypes = {};

RouterProgressBar.defaultProps = {};

export default RouterProgressBar;
