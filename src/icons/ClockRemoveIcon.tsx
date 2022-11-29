import React, { FC, memo } from 'react';
import ClockRemoveSvg from '../svg/clock-remove.svg';

export interface IClockRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockRemoveIcon: FC<IClockRemoveIconProps> = memo(props => {
  return <ClockRemoveSvg {...props} />;
});
