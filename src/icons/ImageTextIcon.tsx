import React, { FC, memo } from 'react';
import ImageTextSvg from '../svg/image-text.svg';

export interface IImageTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageTextIcon: FC<IImageTextIconProps> = memo(props => {
  return <ImageTextSvg {...props} />;
});
