import React, { FC, memo } from 'react';
import SprinklerVariantSvg from '../svg/sprinkler-variant.svg';

export interface ISprinklerVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SprinklerVariantIcon: FC<ISprinklerVariantIconProps> = memo(props => {
  return <SprinklerVariantSvg {...props} />;
});
