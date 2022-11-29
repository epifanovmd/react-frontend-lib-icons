import React, { FC, memo } from 'react';
import ProgressAlertSvg from '../svg/progress-alert.svg';

export interface IProgressAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressAlertIcon: FC<IProgressAlertIconProps> = memo(props => {
  return <ProgressAlertSvg {...props} />;
});
