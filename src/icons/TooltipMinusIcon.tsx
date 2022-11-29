import React, { FC, memo } from 'react';
import TooltipMinusSvg from '../svg/tooltip-minus.svg';

export interface ITooltipMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipMinusIcon: FC<ITooltipMinusIconProps> = memo(props => {
  return <TooltipMinusSvg {...props} />;
});
