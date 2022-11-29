import React, { FC, memo } from 'react';
import ImageEditSvg from '../svg/image-edit.svg';

export interface IImageEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageEditIcon: FC<IImageEditIconProps> = memo(props => {
  return <ImageEditSvg {...props} />;
});
