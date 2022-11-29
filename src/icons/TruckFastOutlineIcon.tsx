import React, { FC, memo } from 'react';
import TruckFastOutlineSvg from '../svg/truck-fast-outline.svg';

export interface ITruckFastOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckFastOutlineIcon: FC<ITruckFastOutlineIconProps> = memo(props => {
  return <TruckFastOutlineSvg {...props} />;
});
