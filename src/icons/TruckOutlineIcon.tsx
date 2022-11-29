import React, { FC, memo } from 'react';
import TruckOutlineSvg from '../svg/truck-outline.svg';

export interface ITruckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckOutlineIcon: FC<ITruckOutlineIconProps> = memo(props => {
  return <TruckOutlineSvg {...props} />;
});
