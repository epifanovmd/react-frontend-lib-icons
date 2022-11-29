import React, { FC, memo } from 'react';
import WaterThermometerOutlineSvg from '../svg/water-thermometer-outline.svg';

export interface IWaterThermometerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterThermometerOutlineIcon: FC<IWaterThermometerOutlineIconProps> = memo(props => {
  return <WaterThermometerOutlineSvg {...props} />;
});
