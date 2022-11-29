import React, { FC, memo } from 'react';
import AlertMinusSvg from '../svg/alert-minus.svg';

export interface IAlertMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertMinusIcon: FC<IAlertMinusIconProps> = memo(props => {
  return <AlertMinusSvg {...props} />;
});
