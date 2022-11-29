import React, { FC, memo } from 'react';
import HeartHalfFullSvg from '../svg/heart-half-full.svg';

export interface IHeartHalfFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartHalfFullIcon: FC<IHeartHalfFullIconProps> = memo(props => {
  return <HeartHalfFullSvg {...props} />;
});
