import React, { FC, memo } from 'react';
import BusStopUncoveredSvg from '../svg/bus-stop-uncovered.svg';

export interface IBusStopUncoveredIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusStopUncoveredIcon: FC<IBusStopUncoveredIconProps> = memo(props => {
  return <BusStopUncoveredSvg {...props} />;
});
