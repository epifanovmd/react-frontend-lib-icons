import React, { FC, memo } from 'react';
import SeatFlatAngledSvg from '../svg/seat-flat-angled.svg';

export interface ISeatFlatAngledIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatFlatAngledIcon: FC<ISeatFlatAngledIconProps> = memo(props => {
  return <SeatFlatAngledSvg {...props} />;
});
