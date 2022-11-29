import React, { FC, memo } from 'react';
import SquareMediumSvg from '../svg/square-medium.svg';

export interface ISquareMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareMediumIcon: FC<ISquareMediumIconProps> = memo(props => {
  return <SquareMediumSvg {...props} />;
});
