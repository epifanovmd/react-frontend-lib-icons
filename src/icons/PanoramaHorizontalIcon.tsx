import React, { FC, memo } from 'react';
import PanoramaHorizontalSvg from '../svg/panorama-horizontal.svg';

export interface IPanoramaHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaHorizontalIcon: FC<IPanoramaHorizontalIconProps> = memo(props => {
  return <PanoramaHorizontalSvg {...props} />;
});
