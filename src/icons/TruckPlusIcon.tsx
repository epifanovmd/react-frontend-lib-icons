import React, { FC, memo } from 'react';
import TruckPlusSvg from '../svg/truck-plus.svg';

export interface ITruckPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckPlusIcon: FC<ITruckPlusIconProps> = memo(props => {
  return <TruckPlusSvg {...props} />;
});
