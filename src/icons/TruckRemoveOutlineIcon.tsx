import React, { FC, memo } from 'react';
import TruckRemoveOutlineSvg from '../svg/truck-remove-outline.svg';

export interface ITruckRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckRemoveOutlineIcon: FC<ITruckRemoveOutlineIconProps> = memo(props => {
  return <TruckRemoveOutlineSvg {...props} />;
});
