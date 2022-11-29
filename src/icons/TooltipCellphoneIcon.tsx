import React, { FC, memo } from 'react';
import TooltipCellphoneSvg from '../svg/tooltip-cellphone.svg';

export interface ITooltipCellphoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipCellphoneIcon: FC<ITooltipCellphoneIconProps> = memo(props => {
  return <TooltipCellphoneSvg {...props} />;
});
