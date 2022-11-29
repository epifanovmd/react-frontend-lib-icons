import React, { FC, memo } from 'react';
import ImageFilterDramaSvg from '../svg/image-filter-drama.svg';

export interface IImageFilterDramaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterDramaIcon: FC<IImageFilterDramaIconProps> = memo(props => {
  return <ImageFilterDramaSvg {...props} />;
});
