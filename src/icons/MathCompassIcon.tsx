import React, { FC, memo } from 'react';
import MathCompassSvg from '../svg/math-compass.svg';

export interface IMathCompassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathCompassIcon: FC<IMathCompassIconProps> = memo(props => {
  return <MathCompassSvg {...props} />;
});
