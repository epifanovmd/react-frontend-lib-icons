import React, { FC, memo } from 'react';
import ClockTimeNineOutlineSvg from '../svg/clock-time-nine-outline.svg';

export interface IClockTimeNineOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeNineOutlineIcon: FC<IClockTimeNineOutlineIconProps> = memo(props => {
  return <ClockTimeNineOutlineSvg {...props} />;
});
