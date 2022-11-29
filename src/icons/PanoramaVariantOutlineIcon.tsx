import React, { FC, memo } from 'react';
import PanoramaVariantOutlineSvg from '../svg/panorama-variant-outline.svg';

export interface IPanoramaVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaVariantOutlineIcon: FC<IPanoramaVariantOutlineIconProps> = memo(props => {
  return <PanoramaVariantOutlineSvg {...props} />;
});
