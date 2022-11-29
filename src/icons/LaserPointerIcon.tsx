import React, { FC, memo } from 'react';
import LaserPointerSvg from '../svg/laser-pointer.svg';

export interface ILaserPointerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LaserPointerIcon: FC<ILaserPointerIconProps> = memo(props => {
  return <LaserPointerSvg {...props} />;
});
