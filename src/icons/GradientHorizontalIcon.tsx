import React, { FC, memo } from 'react';
import GradientHorizontalSvg from '../svg/gradient-horizontal.svg';

export interface IGradientHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GradientHorizontalIcon: FC<IGradientHorizontalIconProps> = memo(props => {
  return <GradientHorizontalSvg {...props} />;
});
