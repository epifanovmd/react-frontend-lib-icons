import React, { FC, memo } from 'react';
import ImageAreaCloseSvg from '../svg/image-area-close.svg';

export interface IImageAreaCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageAreaCloseIcon: FC<IImageAreaCloseIconProps> = memo(props => {
  return <ImageAreaCloseSvg {...props} />;
});
