import React, { FC, memo } from 'react';
import PanoramaVariantSvg from '../svg/panorama-variant.svg';

export interface IPanoramaVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaVariantIcon: FC<IPanoramaVariantIconProps> = memo(props => {
  return <PanoramaVariantSvg {...props} />;
});
