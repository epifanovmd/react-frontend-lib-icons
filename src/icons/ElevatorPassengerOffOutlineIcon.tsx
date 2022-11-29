import React, { FC, memo } from 'react';
import ElevatorPassengerOffOutlineSvg from '../svg/elevator-passenger-off-outline.svg';

export interface IElevatorPassengerOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevatorPassengerOffOutlineIcon: FC<IElevatorPassengerOffOutlineIconProps> = memo(props => {
  return <ElevatorPassengerOffOutlineSvg {...props} />;
});
