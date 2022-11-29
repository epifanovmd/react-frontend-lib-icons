import React, { FC, memo } from 'react';
import FireTruckSvg from '../svg/fire-truck.svg';

export interface IFireTruckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireTruckIcon: FC<IFireTruckIconProps> = memo(props => {
  return <FireTruckSvg {...props} />;
});
