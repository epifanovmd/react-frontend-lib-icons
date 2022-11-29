import React, { FC, memo } from 'react';
import GateAlertSvg from '../svg/gate-alert.svg';

export interface IGateAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateAlertIcon: FC<IGateAlertIconProps> = memo(props => {
  return <GateAlertSvg {...props} />;
});
