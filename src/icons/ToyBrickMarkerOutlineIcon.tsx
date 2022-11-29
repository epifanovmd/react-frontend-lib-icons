import React, { FC, memo } from 'react';
import ToyBrickMarkerOutlineSvg from '../svg/toy-brick-marker-outline.svg';

export interface IToyBrickMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickMarkerOutlineIcon: FC<IToyBrickMarkerOutlineIconProps> = memo(props => {
  return <ToyBrickMarkerOutlineSvg {...props} />;
});
