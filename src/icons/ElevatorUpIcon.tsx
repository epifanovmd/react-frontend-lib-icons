import React, { FC, memo } from 'react';
import ElevatorUpSvg from '../svg/elevator-up.svg';

export interface IElevatorUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevatorUpIcon: FC<IElevatorUpIconProps> = memo(props => {
  return <ElevatorUpSvg {...props} />;
});
