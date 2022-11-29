import React, { FC, memo } from 'react';
import WaterPlusSvg from '../svg/water-plus.svg';

export interface IWaterPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterPlusIcon: FC<IWaterPlusIconProps> = memo(props => {
  return <WaterPlusSvg {...props} />;
});
