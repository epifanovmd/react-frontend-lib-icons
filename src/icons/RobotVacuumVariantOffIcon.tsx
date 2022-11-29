import React, { FC, memo } from 'react';
import RobotVacuumVariantOffSvg from '../svg/robot-vacuum-variant-off.svg';

export interface IRobotVacuumVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotVacuumVariantOffIcon: FC<IRobotVacuumVariantOffIconProps> = memo(props => {
  return <RobotVacuumVariantOffSvg {...props} />;
});
