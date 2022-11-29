import React, { FC, memo } from 'react';
import BedClockSvg from '../svg/bed-clock.svg';

export interface IBedClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedClockIcon: FC<IBedClockIconProps> = memo(props => {
  return <BedClockSvg {...props} />;
});
