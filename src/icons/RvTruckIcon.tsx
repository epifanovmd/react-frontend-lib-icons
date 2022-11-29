import React, { FC, memo } from 'react';
import RvTruckSvg from '../svg/rv-truck.svg';

export interface IRvTruckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RvTruckIcon: FC<IRvTruckIconProps> = memo(props => {
  return <RvTruckSvg {...props} />;
});
