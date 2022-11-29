import React, { FC, memo } from 'react';
import ImageSearchOutlineSvg from '../svg/image-search-outline.svg';

export interface IImageSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageSearchOutlineIcon: FC<IImageSearchOutlineIconProps> = memo(props => {
  return <ImageSearchOutlineSvg {...props} />;
});
