import React, { FC, memo } from 'react';
import ElevatorPassengerSvg from '../svg/elevator-passenger.svg';

export interface IElevatorPassengerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevatorPassengerIcon: FC<IElevatorPassengerIconProps> = memo(props => {
  return <ElevatorPassengerSvg {...props} />;
});
