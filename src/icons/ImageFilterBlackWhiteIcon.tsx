import React, { FC, memo } from 'react';
import ImageFilterBlackWhiteSvg from '../svg/image-filter-black-white.svg';

export interface IImageFilterBlackWhiteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterBlackWhiteIcon: FC<IImageFilterBlackWhiteIconProps> = memo(props => {
  return <ImageFilterBlackWhiteSvg {...props} />;
});
