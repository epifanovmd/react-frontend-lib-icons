import React, { FC, memo } from 'react';
import TooltipImageSvg from '../svg/tooltip-image.svg';

export interface ITooltipImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipImageIcon: FC<ITooltipImageIconProps> = memo(props => {
  return <TooltipImageSvg {...props} />;
});
