import React, { FC, memo } from 'react';
import NotEqualSvg from '../svg/not-equal.svg';

export interface INotEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotEqualIcon: FC<INotEqualIconProps> = memo(props => {
  return <NotEqualSvg {...props} />;
});
