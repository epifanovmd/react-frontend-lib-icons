import React, { FC, memo } from 'react';
import WaterMinusSvg from '../svg/water-minus.svg';

export interface IWaterMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterMinusIcon: FC<IWaterMinusIconProps> = memo(props => {
  return <WaterMinusSvg {...props} />;
});
