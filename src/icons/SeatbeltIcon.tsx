import React, { FC, memo } from 'react';
import SeatbeltSvg from '../svg/seatbelt.svg';

export interface ISeatbeltIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatbeltIcon: FC<ISeatbeltIconProps> = memo(props => {
  return <SeatbeltSvg {...props} />;
});
