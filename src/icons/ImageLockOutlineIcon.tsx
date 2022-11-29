import React, { FC, memo } from 'react';
import ImageLockOutlineSvg from '../svg/image-lock-outline.svg';

export interface IImageLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageLockOutlineIcon: FC<IImageLockOutlineIconProps> = memo(props => {
  return <ImageLockOutlineSvg {...props} />;
});
