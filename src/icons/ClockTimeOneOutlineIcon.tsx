import React, { FC, memo } from 'react';
import ClockTimeOneOutlineSvg from '../svg/clock-time-one-outline.svg';

export interface IClockTimeOneOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeOneOutlineIcon: FC<IClockTimeOneOutlineIconProps> = memo(props => {
  return <ClockTimeOneOutlineSvg {...props} />;
});
