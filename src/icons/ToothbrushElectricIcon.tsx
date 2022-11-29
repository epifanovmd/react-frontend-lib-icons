import React, { FC, memo } from 'react';
import ToothbrushElectricSvg from '../svg/toothbrush-electric.svg';

export interface IToothbrushElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToothbrushElectricIcon: FC<IToothbrushElectricIconProps> = memo(props => {
  return <ToothbrushElectricSvg {...props} />;
});
