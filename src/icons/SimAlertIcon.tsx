import React, { FC, memo } from 'react';
import SimAlertSvg from '../svg/sim-alert.svg';

export interface ISimAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SimAlertIcon: FC<ISimAlertIconProps> = memo(props => {
  return <SimAlertSvg {...props} />;
});
