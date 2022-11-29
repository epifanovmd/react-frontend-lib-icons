import React, { FC, memo } from 'react';
import ClockTimeThreeOutlineSvg from '../svg/clock-time-three-outline.svg';

export interface IClockTimeThreeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeThreeOutlineIcon: FC<IClockTimeThreeOutlineIconProps> = memo(props => {
  return <ClockTimeThreeOutlineSvg {...props} />;
});
