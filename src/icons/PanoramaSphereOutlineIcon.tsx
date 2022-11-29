import React, { FC, memo } from 'react';
import PanoramaSphereOutlineSvg from '../svg/panorama-sphere-outline.svg';

export interface IPanoramaSphereOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaSphereOutlineIcon: FC<IPanoramaSphereOutlineIconProps> = memo(props => {
  return <PanoramaSphereOutlineSvg {...props} />;
});
