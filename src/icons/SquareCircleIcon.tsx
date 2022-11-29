import React, { FC, memo } from 'react';
import SquareCircleSvg from '../svg/square-circle.svg';

export interface ISquareCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareCircleIcon: FC<ISquareCircleIconProps> = memo(props => {
  return <SquareCircleSvg {...props} />;
});
