import React, { FC, memo } from 'react';
import TooltipEditSvg from '../svg/tooltip-edit.svg';

export interface ITooltipEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipEditIcon: FC<ITooltipEditIconProps> = memo(props => {
  return <TooltipEditSvg {...props} />;
});
