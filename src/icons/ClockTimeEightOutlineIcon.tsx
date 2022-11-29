import React, { FC, memo } from 'react';
import ClockTimeEightOutlineSvg from '../svg/clock-time-eight-outline.svg';

export interface IClockTimeEightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeEightOutlineIcon: FC<IClockTimeEightOutlineIconProps> = memo(props => {
  return <ClockTimeEightOutlineSvg {...props} />;
});
