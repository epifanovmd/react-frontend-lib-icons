import React, { FC, memo } from 'react';
import TruckCheckSvg from '../svg/truck-check.svg';

export interface ITruckCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckCheckIcon: FC<ITruckCheckIconProps> = memo(props => {
  return <TruckCheckSvg {...props} />;
});
