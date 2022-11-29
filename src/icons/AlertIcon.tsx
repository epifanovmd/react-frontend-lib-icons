import React, { FC, memo } from 'react';
import AlertSvg from '../svg/alert.svg';

export interface IAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertIcon: FC<IAlertIconProps> = memo(props => {
  return <AlertSvg {...props} />;
});
