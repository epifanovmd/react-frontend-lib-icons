import React, { FC, memo } from 'react';
import BusStopSvg from '../svg/bus-stop.svg';

export interface IBusStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusStopIcon: FC<IBusStopIconProps> = memo(props => {
  return <BusStopSvg {...props} />;
});
