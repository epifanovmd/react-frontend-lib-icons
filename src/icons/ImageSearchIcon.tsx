import React, { FC, memo } from 'react';
import ImageSearchSvg from '../svg/image-search.svg';

export interface IImageSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageSearchIcon: FC<IImageSearchIconProps> = memo(props => {
  return <ImageSearchSvg {...props} />;
});
