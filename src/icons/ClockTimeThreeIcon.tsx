import React, { FC, memo } from 'react';
import ClockTimeThreeSvg from '../svg/clock-time-three.svg';

export interface IClockTimeThreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeThreeIcon: FC<IClockTimeThreeIconProps> = memo(props => {
  return <ClockTimeThreeSvg {...props} />;
});
