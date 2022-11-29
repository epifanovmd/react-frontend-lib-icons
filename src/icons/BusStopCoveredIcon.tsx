import React, { FC, memo } from 'react';
import BusStopCoveredSvg from '../svg/bus-stop-covered.svg';

export interface IBusStopCoveredIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusStopCoveredIcon: FC<IBusStopCoveredIconProps> = memo(props => {
  return <BusStopCoveredSvg {...props} />;
});
