import React, { FC, memo } from 'react';
import RotateRightSvg from '../svg/rotate-right.svg';

export interface IRotateRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RotateRightIcon: FC<IRotateRightIconProps> = memo(props => {
  return <RotateRightSvg {...props} />;
});
