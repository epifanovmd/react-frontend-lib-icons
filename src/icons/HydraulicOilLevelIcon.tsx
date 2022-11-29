import React, { FC, memo } from 'react';
import HydraulicOilLevelSvg from '../svg/hydraulic-oil-level.svg';

export interface IHydraulicOilLevelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HydraulicOilLevelIcon: FC<IHydraulicOilLevelIconProps> = memo(props => {
  return <HydraulicOilLevelSvg {...props} />;
});
