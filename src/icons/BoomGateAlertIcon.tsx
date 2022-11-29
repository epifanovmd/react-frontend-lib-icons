import React, { FC, memo } from 'react';
import BoomGateAlertSvg from '../svg/boom-gate-alert.svg';

export interface IBoomGateAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateAlertIcon: FC<IBoomGateAlertIconProps> = memo(props => {
  return <BoomGateAlertSvg {...props} />;
});
