import React, { FC, memo } from 'react';
import RobotIndustrialOutlineSvg from '../svg/robot-industrial-outline.svg';

export interface IRobotIndustrialOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotIndustrialOutlineIcon: FC<IRobotIndustrialOutlineIconProps> = memo(props => {
  return <RobotIndustrialOutlineSvg {...props} />;
});
