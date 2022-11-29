import React, { FC, memo } from 'react';
import AnimationSvg from '../svg/animation.svg';

export interface IAnimationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AnimationIcon: FC<IAnimationIconProps> = memo(props => {
  return <AnimationSvg {...props} />;
});
