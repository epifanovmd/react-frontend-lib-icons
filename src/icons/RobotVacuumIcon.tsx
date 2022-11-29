import React, { FC, memo } from 'react';
import RobotVacuumSvg from '../svg/robot-vacuum.svg';

export interface IRobotVacuumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotVacuumIcon: FC<IRobotVacuumIconProps> = memo(props => {
  return <RobotVacuumSvg {...props} />;
});
