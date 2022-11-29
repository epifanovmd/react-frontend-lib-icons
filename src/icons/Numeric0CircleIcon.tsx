import React, { FC, memo } from 'react';
import Numeric0CircleSvg from '../svg/numeric-0-circle.svg';

export interface INumeric0CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric0CircleIcon: FC<INumeric0CircleIconProps> = memo(props => {
  return <Numeric0CircleSvg {...props} />;
});
