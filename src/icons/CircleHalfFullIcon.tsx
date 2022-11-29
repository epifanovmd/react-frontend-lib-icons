import React, { FC, memo } from 'react';
import CircleHalfFullSvg from '../svg/circle-half-full.svg';

export interface ICircleHalfFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleHalfFullIcon: FC<ICircleHalfFullIconProps> = memo(props => {
  return <CircleHalfFullSvg {...props} />;
});
