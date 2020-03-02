import React, {useEffect, useState} from 'react';
import Router from 'next/router';
import {useNProgress} from '@tanem/react-nprogress';

import RouterProgressBar from './RouterProgressBar';

const RouterProgress = ({
  animationDuration,
  incrementDuration,
  minimum
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const onRouteChangeStart = () => {
    setIsAnimating(true);
  };

  const routeChangeComplete = () => {
    setIsAnimating(false);
  };

  const routeChangeError = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart);
    Router.events.on('routeChangeComplete', routeChangeComplete);
    Router.events.on('routeChangeError', routeChangeError);

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart);
      Router.events.off('routeChangeComplete', routeChangeComplete);
      Router.events.off('routeChangeError', routeChangeError);
    };
  }, []);

  const {isFinished, progress} = useNProgress({
    animationDuration,
    incrementDuration,
    isAnimating,
    minimum
  });

  return (
    <RouterProgressBar isFinished={isFinished} progress={progress} />
  );
};

export default RouterProgress;
