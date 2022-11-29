import React, { FC, memo } from 'react';
import ClockRemoveOutlineSvg from '../svg/clock-remove-outline.svg';

export interface IClockRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockRemoveOutlineIcon: FC<IClockRemoveOutlineIconProps> = memo(props => {
  return <ClockRemoveOutlineSvg {...props} />;
});
