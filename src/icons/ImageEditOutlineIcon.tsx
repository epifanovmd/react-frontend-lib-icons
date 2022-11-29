import React, { FC, memo } from 'react';
import ImageEditOutlineSvg from '../svg/image-edit-outline.svg';

export interface IImageEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageEditOutlineIcon: FC<IImageEditOutlineIconProps> = memo(props => {
  return <ImageEditOutlineSvg {...props} />;
});
