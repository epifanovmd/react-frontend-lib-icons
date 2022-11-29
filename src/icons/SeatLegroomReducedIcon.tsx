import React, { FC, memo } from 'react';
import SeatLegroomReducedSvg from '../svg/seat-legroom-reduced.svg';

export interface ISeatLegroomReducedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatLegroomReducedIcon: FC<ISeatLegroomReducedIconProps> = memo(props => {
  return <SeatLegroomReducedSvg {...props} />;
});
