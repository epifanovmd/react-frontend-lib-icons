import React, { FC, memo } from 'react';
import TruckFastSvg from '../svg/truck-fast.svg';

export interface ITruckFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckFastIcon: FC<ITruckFastIconProps> = memo(props => {
  return <TruckFastSvg {...props} />;
});
