import React, { FC, memo } from 'react';
import WaterOpacitySvg from '../svg/water-opacity.svg';

export interface IWaterOpacityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterOpacityIcon: FC<IWaterOpacityIconProps> = memo(props => {
  return <WaterOpacitySvg {...props} />;
});
