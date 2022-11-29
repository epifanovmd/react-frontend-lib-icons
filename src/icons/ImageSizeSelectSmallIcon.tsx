import React, { FC, memo } from 'react';
import ImageSizeSelectSmallSvg from '../svg/image-size-select-small.svg';

export interface IImageSizeSelectSmallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageSizeSelectSmallIcon: FC<IImageSizeSelectSmallIconProps> = memo(props => {
  return <ImageSizeSelectSmallSvg {...props} />;
});
