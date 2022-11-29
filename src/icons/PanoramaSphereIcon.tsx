import React, { FC, memo } from 'react';
import PanoramaSphereSvg from '../svg/panorama-sphere.svg';

export interface IPanoramaSphereIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaSphereIcon: FC<IPanoramaSphereIconProps> = memo(props => {
  return <PanoramaSphereSvg {...props} />;
});
