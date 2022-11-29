import React, { FC, memo } from 'react';
import RobotOutlineSvg from '../svg/robot-outline.svg';

export interface IRobotOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotOutlineIcon: FC<IRobotOutlineIconProps> = memo(props => {
  return <RobotOutlineSvg {...props} />;
});
