import React, { FC, memo } from 'react';
import Numeric8CircleOutlineSvg from '../svg/numeric-8-circle-outline.svg';

export interface INumeric8CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric8CircleOutlineIcon: FC<INumeric8CircleOutlineIconProps> = memo(props => {
  return <Numeric8CircleOutlineSvg {...props} />;
});
