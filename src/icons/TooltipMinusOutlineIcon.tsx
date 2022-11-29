import React, { FC, memo } from 'react';
import TooltipMinusOutlineSvg from '../svg/tooltip-minus-outline.svg';

export interface ITooltipMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipMinusOutlineIcon: FC<ITooltipMinusOutlineIconProps> = memo(props => {
  return <TooltipMinusOutlineSvg {...props} />;
});
