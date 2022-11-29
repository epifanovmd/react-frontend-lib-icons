import React, { FC, memo } from 'react';
import SquareOffSvg from '../svg/square-off.svg';

export interface ISquareOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareOffIcon: FC<ISquareOffIconProps> = memo(props => {
  return <SquareOffSvg {...props} />;
});
