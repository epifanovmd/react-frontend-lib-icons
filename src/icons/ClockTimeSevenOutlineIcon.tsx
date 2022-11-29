import React, { FC, memo } from 'react';
import ClockTimeSevenOutlineSvg from '../svg/clock-time-seven-outline.svg';

export interface IClockTimeSevenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeSevenOutlineIcon: FC<IClockTimeSevenOutlineIconProps> = memo(props => {
  return <ClockTimeSevenOutlineSvg {...props} />;
});
