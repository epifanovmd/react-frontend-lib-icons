import React, { FC, memo } from 'react';
import TooltipPlusOutlineSvg from '../svg/tooltip-plus-outline.svg';

export interface ITooltipPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipPlusOutlineIcon: FC<ITooltipPlusOutlineIconProps> = memo(props => {
  return <TooltipPlusOutlineSvg {...props} />;
});
