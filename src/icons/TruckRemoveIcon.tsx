import React, { FC, memo } from 'react';
import TruckRemoveSvg from '../svg/truck-remove.svg';

export interface ITruckRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckRemoveIcon: FC<ITruckRemoveIconProps> = memo(props => {
  return <TruckRemoveSvg {...props} />;
});
