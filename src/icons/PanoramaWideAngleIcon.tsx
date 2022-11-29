import React, { FC, memo } from 'react';
import PanoramaWideAngleSvg from '../svg/panorama-wide-angle.svg';

export interface IPanoramaWideAngleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaWideAngleIcon: FC<IPanoramaWideAngleIconProps> = memo(props => {
  return <PanoramaWideAngleSvg {...props} />;
});
