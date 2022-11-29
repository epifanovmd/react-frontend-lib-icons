import React, { FC, memo } from 'react';
import MotionPlayOutlineSvg from '../svg/motion-play-outline.svg';

export interface IMotionPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionPlayOutlineIcon: FC<IMotionPlayOutlineIconProps> = memo(props => {
  return <MotionPlayOutlineSvg {...props} />;
});
