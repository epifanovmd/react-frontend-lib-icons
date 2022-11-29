import React, { FC, memo } from 'react';
import ImageSizeSelectActualSvg from '../svg/image-size-select-actual.svg';

export interface IImageSizeSelectActualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageSizeSelectActualIcon: FC<IImageSizeSelectActualIconProps> = memo(props => {
  return <ImageSizeSelectActualSvg {...props} />;
});
