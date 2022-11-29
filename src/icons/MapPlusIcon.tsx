import React, { FC, memo } from 'react';
import MapPlusSvg from '../svg/map-plus.svg';

export interface IMapPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapPlusIcon: FC<IMapPlusIconProps> = memo(props => {
  return <MapPlusSvg {...props} />;
});
