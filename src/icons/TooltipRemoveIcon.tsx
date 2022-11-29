import React, { FC, memo } from 'react';
import TooltipRemoveSvg from '../svg/tooltip-remove.svg';

export interface ITooltipRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipRemoveIcon: FC<ITooltipRemoveIconProps> = memo(props => {
  return <TooltipRemoveSvg {...props} />;
});
