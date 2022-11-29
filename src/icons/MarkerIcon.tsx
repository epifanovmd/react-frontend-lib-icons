import React, { FC, memo } from 'react';
import MarkerSvg from '../svg/marker.svg';

export interface IMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MarkerIcon: FC<IMarkerIconProps> = memo(props => {
  return <MarkerSvg {...props} />;
});
