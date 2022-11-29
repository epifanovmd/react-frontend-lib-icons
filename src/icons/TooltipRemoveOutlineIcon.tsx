import React, { FC, memo } from 'react';
import TooltipRemoveOutlineSvg from '../svg/tooltip-remove-outline.svg';

export interface ITooltipRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipRemoveOutlineIcon: FC<ITooltipRemoveOutlineIconProps> = memo(props => {
  return <TooltipRemoveOutlineSvg {...props} />;
});
