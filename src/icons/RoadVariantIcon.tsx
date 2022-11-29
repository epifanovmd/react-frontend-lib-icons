import React, { FC, memo } from 'react';
import RoadVariantSvg from '../svg/road-variant.svg';

export interface IRoadVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RoadVariantIcon: FC<IRoadVariantIconProps> = memo(props => {
  return <RoadVariantSvg {...props} />;
});
