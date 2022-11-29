import React, { FC, memo } from 'react';
import Numeric3CircleSvg from '../svg/numeric-3-circle.svg';

export interface INumeric3CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric3CircleIcon: FC<INumeric3CircleIconProps> = memo(props => {
  return <Numeric3CircleSvg {...props} />;
});
