import React, { FC, memo } from 'react';
import WaterSvg from '../svg/water.svg';

export interface IWaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterIcon: FC<IWaterIconProps> = memo(props => {
  return <WaterSvg {...props} />;
});
