import React, { FC, memo } from 'react';
import DiscAlertSvg from '../svg/disc-alert.svg';

export interface IDiscAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiscAlertIcon: FC<IDiscAlertIconProps> = memo(props => {
  return <DiscAlertSvg {...props} />;
});
