import React, { FC, memo } from 'react';
import TruckPlusOutlineSvg from '../svg/truck-plus-outline.svg';

export interface ITruckPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckPlusOutlineIcon: FC<ITruckPlusOutlineIconProps> = memo(props => {
  return <TruckPlusOutlineSvg {...props} />;
});
