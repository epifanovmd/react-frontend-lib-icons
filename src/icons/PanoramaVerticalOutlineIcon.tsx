import React, { FC, memo } from 'react';
import PanoramaVerticalOutlineSvg from '../svg/panorama-vertical-outline.svg';

export interface IPanoramaVerticalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaVerticalOutlineIcon: FC<IPanoramaVerticalOutlineIconProps> = memo(props => {
  return <PanoramaVerticalOutlineSvg {...props} />;
});
