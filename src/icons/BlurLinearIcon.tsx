import React, { FC, memo } from 'react';
import BlurLinearSvg from '../svg/blur-linear.svg';

export interface IBlurLinearIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlurLinearIcon: FC<IBlurLinearIconProps> = memo(props => {
  return <BlurLinearSvg {...props} />;
});
