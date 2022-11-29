import React, { FC, memo } from 'react';
import TooltipTextOutlineSvg from '../svg/tooltip-text-outline.svg';

export interface ITooltipTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipTextOutlineIcon: FC<ITooltipTextOutlineIconProps> = memo(props => {
  return <TooltipTextOutlineSvg {...props} />;
});
