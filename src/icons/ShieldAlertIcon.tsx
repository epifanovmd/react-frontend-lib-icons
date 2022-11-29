import React, { FC, memo } from 'react';
import ShieldAlertSvg from '../svg/shield-alert.svg';

export interface IShieldAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAlertIcon: FC<IShieldAlertIconProps> = memo(props => {
  return <ShieldAlertSvg {...props} />;
});
