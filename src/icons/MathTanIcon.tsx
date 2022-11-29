import React, { FC, memo } from 'react';
import MathTanSvg from '../svg/math-tan.svg';

export interface IMathTanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathTanIcon: FC<IMathTanIconProps> = memo(props => {
  return <MathTanSvg {...props} />;
});
