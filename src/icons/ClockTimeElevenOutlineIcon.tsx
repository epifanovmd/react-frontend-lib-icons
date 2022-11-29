import React, { FC, memo } from 'react';
import ClockTimeElevenOutlineSvg from '../svg/clock-time-eleven-outline.svg';

export interface IClockTimeElevenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeElevenOutlineIcon: FC<IClockTimeElevenOutlineIconProps> = memo(props => {
  return <ClockTimeElevenOutlineSvg {...props} />;
});
