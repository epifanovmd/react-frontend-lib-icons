import React, { FC, memo } from 'react';
import HeartHalfSvg from '../svg/heart-half.svg';

export interface IHeartHalfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartHalfIcon: FC<IHeartHalfIconProps> = memo(props => {
  return <HeartHalfSvg {...props} />;
});
