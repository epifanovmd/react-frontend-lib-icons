import React, { FC, memo } from 'react';
import AirplanePlusSvg from '../svg/airplane-plus.svg';

export interface IAirplanePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplanePlusIcon: FC<IAirplanePlusIconProps> = memo(props => {
  return <AirplanePlusSvg {...props} />;
});
