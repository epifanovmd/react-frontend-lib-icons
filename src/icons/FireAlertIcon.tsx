import React, { FC, memo } from 'react';
import FireAlertSvg from '../svg/fire-alert.svg';

export interface IFireAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireAlertIcon: FC<IFireAlertIconProps> = memo(props => {
  return <FireAlertSvg {...props} />;
});
