import React, { FC, memo } from 'react';
import SetSquareSvg from '../svg/set-square.svg';

export interface ISetSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetSquareIcon: FC<ISetSquareIconProps> = memo(props => {
  return <SetSquareSvg {...props} />;
});
