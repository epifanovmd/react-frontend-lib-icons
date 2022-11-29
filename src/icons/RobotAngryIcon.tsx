import React, { FC, memo } from 'react';
import RobotAngrySvg from '../svg/robot-angry.svg';

export interface IRobotAngryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotAngryIcon: FC<IRobotAngryIconProps> = memo(props => {
  return <RobotAngrySvg {...props} />;
});
