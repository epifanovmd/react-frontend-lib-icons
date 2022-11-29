import React, { FC, memo } from 'react';
import FloorLampDualSvg from '../svg/floor-lamp-dual.svg';

export interface IFloorLampDualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampDualIcon: FC<IFloorLampDualIconProps> = memo(props => {
  return <FloorLampDualSvg {...props} />;
});
