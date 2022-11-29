import React, { FC, memo } from 'react';
import TooltipEditOutlineSvg from '../svg/tooltip-edit-outline.svg';

export interface ITooltipEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipEditOutlineIcon: FC<ITooltipEditOutlineIconProps> = memo(props => {
  return <TooltipEditOutlineSvg {...props} />;
});
