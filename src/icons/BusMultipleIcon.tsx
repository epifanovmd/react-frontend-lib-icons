import React, { FC, memo } from 'react';
import BusMultipleSvg from '../svg/bus-multiple.svg';

export interface IBusMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusMultipleIcon: FC<IBusMultipleIconProps> = memo(props => {
  return <BusMultipleSvg {...props} />;
});
