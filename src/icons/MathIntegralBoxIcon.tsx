import React, { FC, memo } from 'react';
import MathIntegralBoxSvg from '../svg/math-integral-box.svg';

export interface IMathIntegralBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathIntegralBoxIcon: FC<IMathIntegralBoxIconProps> = memo(props => {
  return <MathIntegralBoxSvg {...props} />;
});
