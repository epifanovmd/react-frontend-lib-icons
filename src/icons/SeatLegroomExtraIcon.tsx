import React, { FC, memo } from 'react';
import SeatLegroomExtraSvg from '../svg/seat-legroom-extra.svg';

export interface ISeatLegroomExtraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatLegroomExtraIcon: FC<ISeatLegroomExtraIconProps> = memo(props => {
  return <SeatLegroomExtraSvg {...props} />;
});
