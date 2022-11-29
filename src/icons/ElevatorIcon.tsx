import React, { FC, memo } from 'react';
import ElevatorSvg from '../svg/elevator.svg';

export interface IElevatorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevatorIcon: FC<IElevatorIconProps> = memo(props => {
  return <ElevatorSvg {...props} />;
});
