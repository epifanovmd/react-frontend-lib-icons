import React, { FC, memo } from 'react';
import MapCheckOutlineSvg from '../svg/map-check-outline.svg';

export interface IMapCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapCheckOutlineIcon: FC<IMapCheckOutlineIconProps> = memo(props => {
  return <MapCheckOutlineSvg {...props} />;
});
