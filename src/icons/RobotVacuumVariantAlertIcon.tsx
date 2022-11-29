import React, { FC, memo } from 'react';
import RobotVacuumVariantAlertSvg from '../svg/robot-vacuum-variant-alert.svg';

export interface IRobotVacuumVariantAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotVacuumVariantAlertIcon: FC<IRobotVacuumVariantAlertIconProps> = memo(props => {
  return <RobotVacuumVariantAlertSvg {...props} />;
});
