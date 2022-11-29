import React, { FC, memo } from 'react';
import Numeric6CircleSvg from '../svg/numeric-6-circle.svg';

export interface INumeric6CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric6CircleIcon: FC<INumeric6CircleIconProps> = memo(props => {
  return <Numeric6CircleSvg {...props} />;
});
