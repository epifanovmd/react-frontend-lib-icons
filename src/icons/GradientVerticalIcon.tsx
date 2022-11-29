import React, { FC, memo } from 'react';
import GradientVerticalSvg from '../svg/gradient-vertical.svg';

export interface IGradientVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GradientVerticalIcon: FC<IGradientVerticalIconProps> = memo(props => {
  return <GradientVerticalSvg {...props} />;
});
