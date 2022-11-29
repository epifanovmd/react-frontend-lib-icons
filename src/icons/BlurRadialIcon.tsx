import React, { FC, memo } from 'react';
import BlurRadialSvg from '../svg/blur-radial.svg';

export interface IBlurRadialIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlurRadialIcon: FC<IBlurRadialIconProps> = memo(props => {
  return <BlurRadialSvg {...props} />;
});
