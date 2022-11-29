import React, { FC, memo } from 'react';
import FirefoxSvg from '../svg/firefox.svg';

export interface IFirefoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FirefoxIcon: FC<IFirefoxIconProps> = memo(props => {
  return <FirefoxSvg {...props} />;
});
