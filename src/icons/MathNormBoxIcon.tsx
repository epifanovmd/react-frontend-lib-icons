import React, { FC, memo } from 'react';
import MathNormBoxSvg from '../svg/math-norm-box.svg';

export interface IMathNormBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathNormBoxIcon: FC<IMathNormBoxIconProps> = memo(props => {
  return <MathNormBoxSvg {...props} />;
});
