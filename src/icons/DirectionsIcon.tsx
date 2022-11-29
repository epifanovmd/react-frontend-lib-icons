import React, { FC, memo } from 'react';
import DirectionsSvg from '../svg/directions.svg';

export interface IDirectionsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DirectionsIcon: FC<IDirectionsIconProps> = memo(props => {
  return <DirectionsSvg {...props} />;
});
