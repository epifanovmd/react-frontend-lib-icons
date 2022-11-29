import React, { FC, memo } from 'react';
import FlashAlertSvg from '../svg/flash-alert.svg';

export interface IFlashAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashAlertIcon: FC<IFlashAlertIconProps> = memo(props => {
  return <FlashAlertSvg {...props} />;
});
