import React, { FC, memo } from 'react';
import RotateLeftSvg from '../svg/rotate-left.svg';

export interface IRotateLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RotateLeftIcon: FC<IRotateLeftIconProps> = memo(props => {
  return <RotateLeftSvg {...props} />;
});
