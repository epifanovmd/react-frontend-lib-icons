import React, { FC, memo } from 'react';
import RobotOffOutlineSvg from '../svg/robot-off-outline.svg';

export interface IRobotOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotOffOutlineIcon: FC<IRobotOffOutlineIconProps> = memo(props => {
  return <RobotOffOutlineSvg {...props} />;
});
