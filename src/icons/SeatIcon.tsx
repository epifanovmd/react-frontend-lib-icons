import React, { FC, memo } from 'react';
import SeatSvg from '../svg/seat.svg';

export interface ISeatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatIcon: FC<ISeatIconProps> = memo(props => {
  return <SeatSvg {...props} />;
});
