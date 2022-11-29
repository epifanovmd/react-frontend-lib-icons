import React, { FC, memo } from 'react';
import ImageLockSvg from '../svg/image-lock.svg';

export interface IImageLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageLockIcon: FC<IImageLockIconProps> = memo(props => {
  return <ImageLockSvg {...props} />;
});
