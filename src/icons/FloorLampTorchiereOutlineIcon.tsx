import React, { FC, memo } from 'react';
import FloorLampTorchiereOutlineSvg from '../svg/floor-lamp-torchiere-outline.svg';

export interface IFloorLampTorchiereOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampTorchiereOutlineIcon: FC<IFloorLampTorchiereOutlineIconProps> = memo(props => {
  return <FloorLampTorchiereOutlineSvg {...props} />;
});
