import React, { FC, memo } from 'react';
import BusSvg from '../svg/bus.svg';

export interface IBusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusIcon: FC<IBusIconProps> = memo(props => {
  return <BusSvg {...props} />;
});
