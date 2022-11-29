import React, { FC, memo } from 'react';
import AlertCircleSvg from '../svg/alert-circle.svg';

export interface IAlertCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertCircleIcon: FC<IAlertCircleIconProps> = memo(props => {
  return <AlertCircleSvg {...props} />;
});
