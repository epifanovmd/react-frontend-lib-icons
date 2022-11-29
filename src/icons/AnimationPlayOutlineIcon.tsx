import React, { FC, memo } from 'react';
import AnimationPlayOutlineSvg from '../svg/animation-play-outline.svg';

export interface IAnimationPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AnimationPlayOutlineIcon: FC<IAnimationPlayOutlineIconProps> = memo(props => {
  return <AnimationPlayOutlineSvg {...props} />;
});
