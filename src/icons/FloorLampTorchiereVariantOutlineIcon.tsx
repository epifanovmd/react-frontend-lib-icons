import React, { FC, memo } from 'react';
import FloorLampTorchiereVariantOutlineSvg from '../svg/floor-lamp-torchiere-variant-outline.svg';

export interface IFloorLampTorchiereVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampTorchiereVariantOutlineIcon: FC<IFloorLampTorchiereVariantOutlineIconProps> = memo(props => {
  return <FloorLampTorchiereVariantOutlineSvg {...props} />;
});
