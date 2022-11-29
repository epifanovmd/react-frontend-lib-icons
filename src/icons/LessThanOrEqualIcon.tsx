import React, { FC, memo } from 'react';
import LessThanOrEqualSvg from '../svg/less-than-or-equal.svg';

export interface ILessThanOrEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LessThanOrEqualIcon: FC<ILessThanOrEqualIconProps> = memo(props => {
  return <LessThanOrEqualSvg {...props} />;
});
