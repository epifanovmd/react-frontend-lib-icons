import React, { FC, memo } from 'react';
import SeatOutlineSvg from '../svg/seat-outline.svg';

export interface ISeatOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeatOutlineIcon: FC<ISeatOutlineIconProps> = memo(props => {
  return <SeatOutlineSvg {...props} />;
});
