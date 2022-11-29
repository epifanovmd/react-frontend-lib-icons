import React, { FC, memo } from 'react';
import PanoramaHorizontalOutlineSvg from '../svg/panorama-horizontal-outline.svg';

export interface IPanoramaHorizontalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaHorizontalOutlineIcon: FC<IPanoramaHorizontalOutlineIconProps> = memo(props => {
  return <PanoramaHorizontalOutlineSvg {...props} />;
});
