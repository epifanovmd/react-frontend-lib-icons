import React, { FC, memo } from 'react';
import TowTruckSvg from '../svg/tow-truck.svg';

export interface ITowTruckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TowTruckIcon: FC<ITowTruckIconProps> = memo(props => {
  return <TowTruckSvg {...props} />;
});
