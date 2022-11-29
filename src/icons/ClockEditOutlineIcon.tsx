import React, { FC, memo } from 'react';
import ClockEditOutlineSvg from '../svg/clock-edit-outline.svg';

export interface IClockEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockEditOutlineIcon: FC<IClockEditOutlineIconProps> = memo(props => {
  return <ClockEditOutlineSvg {...props} />;
});
