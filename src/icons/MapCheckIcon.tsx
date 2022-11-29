import React, { FC, memo } from 'react';
import MapCheckSvg from '../svg/map-check.svg';

export interface IMapCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapCheckIcon: FC<IMapCheckIconProps> = memo(props => {
  return <MapCheckSvg {...props} />;
});
