import React, { FC, memo } from 'react';
import ImageMarkerSvg from '../svg/image-marker.svg';

export interface IImageMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageMarkerIcon: FC<IImageMarkerIconProps> = memo(props => {
  return <ImageMarkerSvg {...props} />;
});
