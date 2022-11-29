import React, { FC, memo } from 'react';
import TooltipSvg from '../svg/tooltip.svg';

export interface ITooltipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipIcon: FC<ITooltipIconProps> = memo(props => {
  return <TooltipSvg {...props} />;
});
