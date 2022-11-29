import React, { FC, memo } from 'react';
import FloorLampOutlineSvg from '../svg/floor-lamp-outline.svg';

export interface IFloorLampOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorLampOutlineIcon: FC<IFloorLampOutlineIconProps> = memo(props => {
  return <FloorLampOutlineSvg {...props} />;
});
