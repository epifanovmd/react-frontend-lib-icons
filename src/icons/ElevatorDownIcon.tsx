import React, { FC, memo } from 'react';
import ElevatorDownSvg from '../svg/elevator-down.svg';

export interface IElevatorDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevatorDownIcon: FC<IElevatorDownIconProps> = memo(props => {
  return <ElevatorDownSvg {...props} />;
});
