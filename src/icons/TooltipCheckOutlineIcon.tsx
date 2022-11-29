import React, { FC, memo } from 'react';
import TooltipCheckOutlineSvg from '../svg/tooltip-check-outline.svg';

export interface ITooltipCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipCheckOutlineIcon: FC<ITooltipCheckOutlineIconProps> = memo(props => {
  return <TooltipCheckOutlineSvg {...props} />;
});
