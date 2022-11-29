import React, { FC, memo } from 'react';
import BusArticulatedEndSvg from '../svg/bus-articulated-end.svg';

export interface IBusArticulatedEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusArticulatedEndIcon: FC<IBusArticulatedEndIconProps> = memo(props => {
  return <BusArticulatedEndSvg {...props} />;
});
