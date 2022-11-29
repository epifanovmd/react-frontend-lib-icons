import React, { FC, memo } from 'react';
import FloorLampDualOutlineSvg from '../svg/floor-lamp-dual-outline.svg';

export interface IFloorLampDualOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampDualOutlineIcon: FC<IFloorLampDualOutlineIconProps> = memo(props => {
  return <FloorLampDualOutlineSvg {...props} />;
});
