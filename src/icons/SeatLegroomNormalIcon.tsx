import React, { FC, memo } from 'react';
import SeatLegroomNormalSvg from '../svg/seat-legroom-normal.svg';

export interface ISeatLegroomNormalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatLegroomNormalIcon: FC<ISeatLegroomNormalIconProps> = memo(props => {
  return <SeatLegroomNormalSvg {...props} />;
});
