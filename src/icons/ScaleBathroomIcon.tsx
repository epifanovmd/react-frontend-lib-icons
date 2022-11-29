import React, { FC, memo } from 'react';
import ScaleBathroomSvg from '../svg/scale-bathroom.svg';

export interface IScaleBathroomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScaleBathroomIcon: FC<IScaleBathroomIconProps> = memo(props => {
  return <ScaleBathroomSvg {...props} />;
});
