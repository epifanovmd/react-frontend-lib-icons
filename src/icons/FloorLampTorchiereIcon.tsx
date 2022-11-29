import React, { FC, memo } from 'react';
import FloorLampTorchiereSvg from '../svg/floor-lamp-torchiere.svg';

export interface IFloorLampTorchiereIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampTorchiereIcon: FC<IFloorLampTorchiereIconProps> = memo(props => {
  return <FloorLampTorchiereSvg {...props} />;
});
