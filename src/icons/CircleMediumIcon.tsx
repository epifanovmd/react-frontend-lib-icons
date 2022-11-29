import React, { FC, memo } from 'react';
import CircleMediumSvg from '../svg/circle-medium.svg';

export interface ICircleMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleMediumIcon: FC<ICircleMediumIconProps> = memo(props => {
  return <CircleMediumSvg {...props} />;
});
