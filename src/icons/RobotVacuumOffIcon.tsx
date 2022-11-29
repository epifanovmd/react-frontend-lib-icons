import React, { FC, memo } from 'react';
import RobotVacuumOffSvg from '../svg/robot-vacuum-off.svg';

export interface IRobotVacuumOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotVacuumOffIcon: FC<IRobotVacuumOffIconProps> = memo(props => {
  return <RobotVacuumOffSvg {...props} />;
});
