import React, { FC, memo } from 'react';
import FanAutoSvg from '../svg/fan-auto.svg';

export interface IFanAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanAutoIcon: FC<IFanAutoIconProps> = memo(props => {
  return <FanAutoSvg {...props} />;
});
