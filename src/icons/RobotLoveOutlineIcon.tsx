import React, { FC, memo } from 'react';
import RobotLoveOutlineSvg from '../svg/robot-love-outline.svg';

export interface IRobotLoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotLoveOutlineIcon: FC<IRobotLoveOutlineIconProps> = memo(props => {
  return <RobotLoveOutlineSvg {...props} />;
});
