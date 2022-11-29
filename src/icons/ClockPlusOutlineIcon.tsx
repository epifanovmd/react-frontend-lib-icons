import React, { FC, memo } from 'react';
import ClockPlusOutlineSvg from '../svg/clock-plus-outline.svg';

export interface IClockPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockPlusOutlineIcon: FC<IClockPlusOutlineIconProps> = memo(props => {
  return <ClockPlusOutlineSvg {...props} />;
});
