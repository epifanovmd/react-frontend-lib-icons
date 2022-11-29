import React, { FC, memo } from 'react';
import AnimationPlaySvg from '../svg/animation-play.svg';

export interface IAnimationPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AnimationPlayIcon: FC<IAnimationPlayIconProps> = memo(props => {
  return <AnimationPlaySvg {...props} />;
});
