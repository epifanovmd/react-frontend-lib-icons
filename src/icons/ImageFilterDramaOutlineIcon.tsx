import React, { FC, memo } from 'react';
import ImageFilterDramaOutlineSvg from '../svg/image-filter-drama-outline.svg';

export interface IImageFilterDramaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterDramaOutlineIcon: FC<IImageFilterDramaOutlineIconProps> = memo(props => {
  return <ImageFilterDramaOutlineSvg {...props} />;
});
