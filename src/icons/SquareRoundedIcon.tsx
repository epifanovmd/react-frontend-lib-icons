import React, { FC, memo } from 'react';
import SquareRoundedSvg from '../svg/square-rounded.svg';

export interface ISquareRoundedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareRoundedIcon: FC<ISquareRoundedIconProps> = memo(props => {
  return <SquareRoundedSvg {...props} />;
});
