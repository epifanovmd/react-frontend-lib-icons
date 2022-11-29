import React, { FC, memo } from 'react';
import TooltipOutlineSvg from '../svg/tooltip-outline.svg';

export interface ITooltipOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipOutlineIcon: FC<ITooltipOutlineIconProps> = memo(props => {
  return <TooltipOutlineSvg {...props} />;
});
