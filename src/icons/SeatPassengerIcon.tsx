import React, { FC, memo } from 'react';
import SeatPassengerSvg from '../svg/seat-passenger.svg';

export interface ISeatPassengerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatPassengerIcon: FC<ISeatPassengerIconProps> = memo(props => {
  return <SeatPassengerSvg {...props} />;
});
