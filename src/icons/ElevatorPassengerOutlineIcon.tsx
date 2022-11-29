import React, { FC, memo } from 'react';
import ElevatorPassengerOutlineSvg from '../svg/elevator-passenger-outline.svg';

export interface IElevatorPassengerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevatorPassengerOutlineIcon: FC<IElevatorPassengerOutlineIconProps> = memo(props => {
  return <ElevatorPassengerOutlineSvg {...props} />;
});
