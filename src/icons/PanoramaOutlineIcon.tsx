import React, { FC, memo } from 'react';
import PanoramaOutlineSvg from '../svg/panorama-outline.svg';

export interface IPanoramaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaOutlineIcon: FC<IPanoramaOutlineIconProps> = memo(props => {
  return <PanoramaOutlineSvg {...props} />;
});
