import React, { FC, memo } from 'react';
import TankerTruckSvg from '../svg/tanker-truck.svg';

export interface ITankerTruckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TankerTruckIcon: FC<ITankerTruckIconProps> = memo(props => {
  return <TankerTruckSvg {...props} />;
});
