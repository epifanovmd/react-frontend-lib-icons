import React, { FC, memo } from 'react';
import ClockMinusOutlineSvg from '../svg/clock-minus-outline.svg';

export interface IClockMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockMinusOutlineIcon: FC<IClockMinusOutlineIconProps> = memo(props => {
  return <ClockMinusOutlineSvg {...props} />;
});
