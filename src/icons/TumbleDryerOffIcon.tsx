import React, { FC, memo } from 'react';
import TumbleDryerOffSvg from '../svg/tumble-dryer-off.svg';

export interface ITumbleDryerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TumbleDryerOffIcon: FC<ITumbleDryerOffIconProps> = memo(props => {
  return <TumbleDryerOffSvg {...props} />;
});
