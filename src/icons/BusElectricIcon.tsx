import React, { FC, memo } from 'react';
import BusElectricSvg from '../svg/bus-electric.svg';

export interface IBusElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusElectricIcon: FC<IBusElectricIconProps> = memo(props => {
  return <BusElectricSvg {...props} />;
});
