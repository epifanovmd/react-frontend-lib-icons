import React, { FC, memo } from 'react';
import ImageMarkerOutlineSvg from '../svg/image-marker-outline.svg';

export interface IImageMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageMarkerOutlineIcon: FC<IImageMarkerOutlineIconProps> = memo(props => {
  return <ImageMarkerOutlineSvg {...props} />;
});
