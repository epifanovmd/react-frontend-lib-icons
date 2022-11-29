import React, { FC, memo } from 'react';
import RobotVacuumAlertSvg from '../svg/robot-vacuum-alert.svg';

export interface IRobotVacuumAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotVacuumAlertIcon: FC<IRobotVacuumAlertIconProps> = memo(props => {
  return <RobotVacuumAlertSvg {...props} />;
});
