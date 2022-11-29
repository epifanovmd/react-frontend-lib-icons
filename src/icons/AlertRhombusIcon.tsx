import React, { FC, memo } from 'react';
import AlertRhombusSvg from '../svg/alert-rhombus.svg';

export interface IAlertRhombusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertRhombusIcon: FC<IAlertRhombusIconProps> = memo(props => {
  return <AlertRhombusSvg {...props} />;
});
