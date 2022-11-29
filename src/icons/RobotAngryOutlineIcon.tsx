import React, { FC, memo } from 'react';
import RobotAngryOutlineSvg from '../svg/robot-angry-outline.svg';

export interface IRobotAngryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotAngryOutlineIcon: FC<IRobotAngryOutlineIconProps> = memo(props => {
  return <RobotAngryOutlineSvg {...props} />;
});
