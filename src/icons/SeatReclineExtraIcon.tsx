import React, { FC, memo } from 'react';
import SeatReclineExtraSvg from '../svg/seat-recline-extra.svg';

export interface ISeatReclineExtraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatReclineExtraIcon: FC<ISeatReclineExtraIconProps> = memo(props => {
  return <SeatReclineExtraSvg {...props} />;
});
