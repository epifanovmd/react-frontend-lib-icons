import React, { FC, memo } from 'react';
import TooltipImageOutlineSvg from '../svg/tooltip-image-outline.svg';

export interface ITooltipImageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipImageOutlineIcon: FC<ITooltipImageOutlineIconProps> = memo(props => {
  return <TooltipImageOutlineSvg {...props} />;
});
