import React, { FC, memo } from 'react';
import SquareSmallSvg from '../svg/square-small.svg';

export interface ISquareSmallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareSmallIcon: FC<ISquareSmallIconProps> = memo(props => {
  return <SquareSmallSvg {...props} />;
});
