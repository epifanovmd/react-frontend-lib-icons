import React, { FC, memo } from 'react';
import FlashAlertOutlineSvg from '../svg/flash-alert-outline.svg';

export interface IFlashAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashAlertOutlineIcon: FC<IFlashAlertOutlineIconProps> = memo(props => {
  return <FlashAlertOutlineSvg {...props} />;
});
