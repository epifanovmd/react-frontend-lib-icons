import React, { FC, memo } from 'react';
import PlaneCarSvg from '../svg/plane-car.svg';

export interface IPlaneCarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaneCarIcon: FC<IPlaneCarIconProps> = memo(props => {
  return <PlaneCarSvg {...props} />;
});
