import React, { FC, memo } from 'react';
import ClockTimeTwelveSvg from '../svg/clock-time-twelve.svg';

export interface IClockTimeTwelveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeTwelveIcon: FC<IClockTimeTwelveIconProps> = memo(props => {
  return <ClockTimeTwelveSvg {...props} />;
});
