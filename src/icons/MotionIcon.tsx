import React, { FC, memo } from 'react';
import MotionSvg from '../svg/motion.svg';

export interface IMotionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionIcon: FC<IMotionIconProps> = memo(props => {
  return <MotionSvg {...props} />;
});
