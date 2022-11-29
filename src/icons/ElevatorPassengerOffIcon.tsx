import React, { FC, memo } from 'react';
import ElevatorPassengerOffSvg from '../svg/elevator-passenger-off.svg';

export interface IElevatorPassengerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevatorPassengerOffIcon: FC<IElevatorPassengerOffIconProps> = memo(props => {
  return <ElevatorPassengerOffSvg {...props} />;
});
