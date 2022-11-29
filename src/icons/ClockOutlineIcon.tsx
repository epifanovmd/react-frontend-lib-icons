import React, { FC, memo } from 'react';
import ClockOutlineSvg from '../svg/clock-outline.svg';

export interface IClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockOutlineIcon: FC<IClockOutlineIconProps> = memo(props => {
  return <ClockOutlineSvg {...props} />;
});
