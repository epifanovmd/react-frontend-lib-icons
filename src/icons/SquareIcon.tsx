import React, { FC, memo } from 'react';
import SquareSvg from '../svg/square.svg';

export interface ISquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareIcon: FC<ISquareIconProps> = memo(props => {
  return <SquareSvg {...props} />;
});
