import React, { FC, memo } from 'react';
import DroneSvg from '../svg/drone.svg';

export interface IDroneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DroneIcon: FC<IDroneIconProps> = memo(props => {
  return <DroneSvg {...props} />;
});
