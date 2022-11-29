import React, { FC, memo } from 'react';
import ImagePlusOutlineSvg from '../svg/image-plus-outline.svg';

export interface IImagePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImagePlusOutlineIcon: FC<IImagePlusOutlineIconProps> = memo(props => {
  return <ImagePlusOutlineSvg {...props} />;
});
