import React, { FC, memo } from 'react';
import ImagePlusSvg from '../svg/image-plus.svg';

export interface IImagePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImagePlusIcon: FC<IImagePlusIconProps> = memo(props => {
  return <ImagePlusSvg {...props} />;
});
