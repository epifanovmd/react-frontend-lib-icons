import React, { FC, memo } from 'react';
import FloorLampSvg from '../svg/floor-lamp.svg';

export interface IFloorLampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampIcon: FC<IFloorLampIconProps> = memo(props => {
  return <FloorLampSvg {...props} />;
});
