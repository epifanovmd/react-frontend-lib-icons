import React, { FC, memo } from 'react';
import SeatFlatSvg from '../svg/seat-flat.svg';

export interface ISeatFlatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatFlatIcon: FC<ISeatFlatIconProps> = memo(props => {
  return <SeatFlatSvg {...props} />;
});
