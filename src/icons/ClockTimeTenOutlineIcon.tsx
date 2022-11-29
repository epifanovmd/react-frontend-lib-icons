import React, { FC, memo } from 'react';
import ClockTimeTenOutlineSvg from '../svg/clock-time-ten-outline.svg';

export interface IClockTimeTenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeTenOutlineIcon: FC<IClockTimeTenOutlineIconProps> = memo(props => {
  return <ClockTimeTenOutlineSvg {...props} />;
});
