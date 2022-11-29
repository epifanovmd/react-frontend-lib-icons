import React, { FC, memo } from 'react';
import ToyBrickMarkerSvg from '../svg/toy-brick-marker.svg';

export interface IToyBrickMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickMarkerIcon: FC<IToyBrickMarkerIconProps> = memo(props => {
  return <ToyBrickMarkerSvg {...props} />;
});
