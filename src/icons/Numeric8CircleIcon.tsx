import React, { FC, memo } from 'react';
import Numeric8CircleSvg from '../svg/numeric-8-circle.svg';

export interface INumeric8CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric8CircleIcon: FC<INumeric8CircleIconProps> = memo(props => {
  return <Numeric8CircleSvg {...props} />;
});
