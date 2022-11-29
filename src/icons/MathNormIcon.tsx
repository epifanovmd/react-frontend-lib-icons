import React, { FC, memo } from 'react';
import MathNormSvg from '../svg/math-norm.svg';

export interface IMathNormIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathNormIcon: FC<IMathNormIconProps> = memo(props => {
  return <MathNormSvg {...props} />;
});
