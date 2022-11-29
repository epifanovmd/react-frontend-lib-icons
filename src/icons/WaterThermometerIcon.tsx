import React, { FC, memo } from 'react';
import WaterThermometerSvg from '../svg/water-thermometer.svg';

export interface IWaterThermometerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterThermometerIcon: FC<IWaterThermometerIconProps> = memo(props => {
  return <WaterThermometerSvg {...props} />;
});
