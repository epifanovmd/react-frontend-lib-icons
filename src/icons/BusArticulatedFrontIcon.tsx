import React, { FC, memo } from 'react';
import BusArticulatedFrontSvg from '../svg/bus-articulated-front.svg';

export interface IBusArticulatedFrontIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusArticulatedFrontIcon: FC<IBusArticulatedFrontIconProps> = memo(props => {
  return <BusArticulatedFrontSvg {...props} />;
});
