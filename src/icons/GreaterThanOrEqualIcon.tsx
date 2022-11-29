import React, { FC, memo } from 'react';
import GreaterThanOrEqualSvg from '../svg/greater-than-or-equal.svg';

export interface IGreaterThanOrEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GreaterThanOrEqualIcon: FC<IGreaterThanOrEqualIconProps> = memo(props => {
  return <GreaterThanOrEqualSvg {...props} />;
});
