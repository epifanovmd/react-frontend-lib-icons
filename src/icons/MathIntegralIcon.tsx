import React, { FC, memo } from 'react';
import MathIntegralSvg from '../svg/math-integral.svg';

export interface IMathIntegralIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathIntegralIcon: FC<IMathIntegralIconProps> = memo(props => {
  return <MathIntegralSvg {...props} />;
});
