import React, { FC, memo } from 'react';
import PanoramaFisheyeSvg from '../svg/panorama-fisheye.svg';

export interface IPanoramaFisheyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaFisheyeIcon: FC<IPanoramaFisheyeIconProps> = memo(props => {
  return <PanoramaFisheyeSvg {...props} />;
});
