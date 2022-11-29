import React, { FC, memo } from 'react';
import ParkingSvg from '../svg/parking.svg';

export interface IParkingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ParkingIcon: FC<IParkingIconProps> = memo(props => {
  return <ParkingSvg {...props} />;
});
