import React, { FC, memo } from 'react';
import MathCosSvg from '../svg/math-cos.svg';

export interface IMathCosIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathCosIcon: FC<IMathCosIconProps> = memo(props => {
  return <MathCosSvg {...props} />;
});
