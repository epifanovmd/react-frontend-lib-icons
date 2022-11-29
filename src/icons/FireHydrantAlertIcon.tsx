import React, { FC, memo } from 'react';
import FireHydrantAlertSvg from '../svg/fire-hydrant-alert.svg';

export interface IFireHydrantAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireHydrantAlertIcon: FC<IFireHydrantAlertIconProps> = memo(props => {
  return <FireHydrantAlertSvg {...props} />;
});
