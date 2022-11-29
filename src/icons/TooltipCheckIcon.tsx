import React, { FC, memo } from 'react';
import TooltipCheckSvg from '../svg/tooltip-check.svg';

export interface ITooltipCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipCheckIcon: FC<ITooltipCheckIconProps> = memo(props => {
  return <TooltipCheckSvg {...props} />;
});
