import React, { FC, memo } from 'react';
import TruckCheckOutlineSvg from '../svg/truck-check-outline.svg';

export interface ITruckCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckCheckOutlineIcon: FC<ITruckCheckOutlineIconProps> = memo(props => {
  return <TruckCheckOutlineSvg {...props} />;
});
