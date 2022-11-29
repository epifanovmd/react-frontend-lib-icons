import React, { FC, memo } from 'react';
import MapSearchOutlineSvg from '../svg/map-search-outline.svg';

export interface IMapSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapSearchOutlineIcon: FC<IMapSearchOutlineIconProps> = memo(props => {
  return <MapSearchOutlineSvg {...props} />;
});
