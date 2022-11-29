import React, { FC, memo } from 'react';
import MathSinSvg from '../svg/math-sin.svg';

export interface IMathSinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathSinIcon: FC<IMathSinIconProps> = memo(props => {
  return <MathSinSvg {...props} />;
});
