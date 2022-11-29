import React, { FC, memo } from 'react';
import PanoramaWideAngleOutlineSvg from '../svg/panorama-wide-angle-outline.svg';

export interface IPanoramaWideAngleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaWideAngleOutlineIcon: FC<IPanoramaWideAngleOutlineIconProps> = memo(props => {
  return <PanoramaWideAngleOutlineSvg {...props} />;
});
