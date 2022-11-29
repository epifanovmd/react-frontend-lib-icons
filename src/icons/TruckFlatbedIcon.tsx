import React, { FC, memo } from 'react';
import TruckFlatbedSvg from '../svg/truck-flatbed.svg';

export interface ITruckFlatbedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckFlatbedIcon: FC<ITruckFlatbedIconProps> = memo(props => {
  return <TruckFlatbedSvg {...props} />;
});
