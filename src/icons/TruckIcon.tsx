import React, { FC, memo } from 'react';
import TruckSvg from '../svg/truck.svg';

export interface ITruckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckIcon: FC<ITruckIconProps> = memo(props => {
  return <TruckSvg {...props} />;
});
