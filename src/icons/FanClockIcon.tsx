import React, { FC, memo } from 'react';
import FanClockSvg from '../svg/fan-clock.svg';

export interface IFanClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanClockIcon: FC<IFanClockIconProps> = memo(props => {
  return <FanClockSvg {...props} />;
});
