import React, { FC, memo } from 'react';
import MapSearchSvg from '../svg/map-search.svg';

export interface IMapSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapSearchIcon: FC<IMapSearchIconProps> = memo(props => {
  return <MapSearchSvg {...props} />;
});
