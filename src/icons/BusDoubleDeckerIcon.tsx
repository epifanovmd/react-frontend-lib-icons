import React, { FC, memo } from 'react';
import BusDoubleDeckerSvg from '../svg/bus-double-decker.svg';

export interface IBusDoubleDeckerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusDoubleDeckerIcon: FC<IBusDoubleDeckerIconProps> = memo(props => {
  return <BusDoubleDeckerSvg {...props} />;
});
