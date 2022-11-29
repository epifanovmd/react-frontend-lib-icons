import React, { FC, memo } from 'react';
import MapOutlineSvg from '../svg/map-outline.svg';

export interface IMapOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapOutlineIcon: FC<IMapOutlineIconProps> = memo(props => {
  return <MapOutlineSvg {...props} />;
});
