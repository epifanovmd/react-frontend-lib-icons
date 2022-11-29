import React, { FC, memo } from 'react';
import AirplaneClockSvg from '../svg/airplane-clock.svg';

export interface IAirplaneClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneClockIcon: FC<IAirplaneClockIconProps> = memo(props => {
  return <AirplaneClockSvg {...props} />;
});
