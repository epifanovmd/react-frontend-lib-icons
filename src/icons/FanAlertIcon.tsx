import React, { FC, memo } from 'react';
import FanAlertSvg from '../svg/fan-alert.svg';

export interface IFanAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanAlertIcon: FC<IFanAlertIconProps> = memo(props => {
  return <FanAlertSvg {...props} />;
});
