import React, { FC, memo } from 'react';
import TumbleDryerSvg from '../svg/tumble-dryer.svg';

export interface ITumbleDryerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TumbleDryerIcon: FC<ITumbleDryerIconProps> = memo(props => {
  return <TumbleDryerSvg {...props} />;
});
