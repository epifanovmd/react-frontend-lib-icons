import React, { FC, memo } from 'react';
import Numeric2CircleSvg from '../svg/numeric-2-circle.svg';

export interface INumeric2CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric2CircleIcon: FC<INumeric2CircleIconProps> = memo(props => {
  return <Numeric2CircleSvg {...props} />;
});
