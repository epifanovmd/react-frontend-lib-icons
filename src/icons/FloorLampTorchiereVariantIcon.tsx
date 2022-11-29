import React, { FC, memo } from 'react';
import FloorLampTorchiereVariantSvg from '../svg/floor-lamp-torchiere-variant.svg';

export interface IFloorLampTorchiereVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampTorchiereVariantIcon: FC<IFloorLampTorchiereVariantIconProps> = memo(props => {
  return <FloorLampTorchiereVariantSvg {...props} />;
});
