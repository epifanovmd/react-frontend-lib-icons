import React, { FC, memo } from 'react';
import AlertCircleCheckSvg from '../svg/alert-circle-check.svg';

export interface IAlertCircleCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertCircleCheckIcon: FC<IAlertCircleCheckIconProps> = memo(props => {
  return <AlertCircleCheckSvg {...props} />;
});
