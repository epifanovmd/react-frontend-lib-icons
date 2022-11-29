import React, { FC, memo } from 'react';
import ClockEditSvg from '../svg/clock-edit.svg';

export interface IClockEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockEditIcon: FC<IClockEditIconProps> = memo(props => {
  return <ClockEditSvg {...props} />;
});
