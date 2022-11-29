import React, { FC, memo } from 'react';
import SeatReclineNormalSvg from '../svg/seat-recline-normal.svg';

export interface ISeatReclineNormalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatReclineNormalIcon: FC<ISeatReclineNormalIconProps> = memo(props => {
  return <SeatReclineNormalSvg {...props} />;
});
