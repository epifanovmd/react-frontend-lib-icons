import React, { FC, memo } from 'react';
import WaterWellOutlineSvg from '../svg/water-well-outline.svg';

export interface IWaterWellOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterWellOutlineIcon: FC<IWaterWellOutlineIconProps> = memo(props => {
  return <WaterWellOutlineSvg {...props} />;
});
