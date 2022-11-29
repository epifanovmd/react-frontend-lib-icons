import React, { FC, memo } from 'react';
import WaterPercentSvg from '../svg/water-percent.svg';

export interface IWaterPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterPercentIcon: FC<IWaterPercentIconProps> = memo(props => {
  return <WaterPercentSvg {...props} />;
});
