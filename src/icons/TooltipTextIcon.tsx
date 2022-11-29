import React, { FC, memo } from 'react';
import TooltipTextSvg from '../svg/tooltip-text.svg';

export interface ITooltipTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipTextIcon: FC<ITooltipTextIconProps> = memo(props => {
  return <TooltipTextSvg {...props} />;
});
