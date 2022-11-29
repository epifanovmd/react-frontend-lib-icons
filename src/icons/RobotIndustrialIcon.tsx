import React, { FC, memo } from 'react';
import RobotIndustrialSvg from '../svg/robot-industrial.svg';

export interface IRobotIndustrialIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotIndustrialIcon: FC<IRobotIndustrialIconProps> = memo(props => {
  return <RobotIndustrialSvg {...props} />;
});
