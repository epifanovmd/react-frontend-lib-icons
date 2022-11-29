import React, { FC, memo } from 'react';
import EqualSvg from '../svg/equal.svg';

export interface IEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EqualIcon: FC<IEqualIconProps> = memo(props => {
  return <EqualSvg {...props} />;
});
