import React, { FC, memo } from 'react';
import TooltipPlusSvg from '../svg/tooltip-plus.svg';

export interface ITooltipPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipPlusIcon: FC<ITooltipPlusIconProps> = memo(props => {
  return <TooltipPlusSvg {...props} />;
});
