import React, { FC, memo } from 'react';
import CircleHalfSvg from '../svg/circle-half.svg';

export interface ICircleHalfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleHalfIcon: FC<ICircleHalfIconProps> = memo(props => {
  return <CircleHalfSvg {...props} />;
});
