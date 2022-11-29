import React, { FC, memo } from 'react';
import PanoramaVerticalSvg from '../svg/panorama-vertical.svg';

export interface IPanoramaVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanoramaVerticalIcon: FC<IPanoramaVerticalIconProps> = memo(props => {
  return <PanoramaVerticalSvg {...props} />;
});
