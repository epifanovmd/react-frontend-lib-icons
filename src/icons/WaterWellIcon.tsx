import React, { FC, memo } from 'react';
import WaterWellSvg from '../svg/water-well.svg';

export interface IWaterWellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterWellIcon: FC<IWaterWellIconProps> = memo(props => {
  return <WaterWellSvg {...props} />;
});
