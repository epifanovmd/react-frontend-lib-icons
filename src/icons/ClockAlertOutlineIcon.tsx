import React, { FC, memo } from 'react';
import ClockAlertOutlineSvg from '../svg/clock-alert-outline.svg';

export interface IClockAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockAlertOutlineIcon: FC<IClockAlertOutlineIconProps> = memo(props => {
  return <ClockAlertOutlineSvg {...props} />;
});
