import React, { FC, memo } from 'react';
import ImageFilterFramesSvg from '../svg/image-filter-frames.svg';

export interface IImageFilterFramesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterFramesIcon: FC<IImageFilterFramesIconProps> = memo(props => {
  return <ImageFilterFramesSvg {...props} />;
});
