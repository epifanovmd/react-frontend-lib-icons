import React, { FC, memo } from 'react';
import StoreMarkerSvg from '../svg/store-marker.svg';

export interface IStoreMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreMarkerIcon: FC<IStoreMarkerIconProps> = memo(props => {
  return <StoreMarkerSvg {...props} />;
});
