import React, { FC, memo } from 'react';
import AlertCircleCheckOutlineSvg from '../svg/alert-circle-check-outline.svg';

export interface IAlertCircleCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertCircleCheckOutlineIcon: FC<IAlertCircleCheckOutlineIconProps> = memo(props => {
  return <AlertCircleCheckOutlineSvg {...props} />;
});
