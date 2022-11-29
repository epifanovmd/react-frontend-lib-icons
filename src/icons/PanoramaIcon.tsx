import React, { FC, memo } from 'react';
import PanoramaSvg from '../svg/panorama.svg';

export interface IPanoramaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaIcon: FC<IPanoramaIconProps> = memo(props => {
  return <PanoramaSvg {...props} />;
});
