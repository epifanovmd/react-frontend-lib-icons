import React, { FC, memo } from 'react';
import CircleSvg from '../svg/circle.svg';

export interface ICircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleIcon: FC<ICircleIconProps> = memo(props => {
  return <CircleSvg {...props} />;
});
