import React, { FC, memo } from 'react';
import TooltipAccountSvg from '../svg/tooltip-account.svg';

export interface ITooltipAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipAccountIcon: FC<ITooltipAccountIconProps> = memo(props => {
  return <TooltipAccountSvg {...props} />;
});
