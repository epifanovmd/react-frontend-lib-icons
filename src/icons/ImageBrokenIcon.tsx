import React, { FC, memo } from 'react';
import ImageBrokenSvg from '../svg/image-broken.svg';

export interface IImageBrokenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageBrokenIcon: FC<IImageBrokenIconProps> = memo(props => {
  return <ImageBrokenSvg {...props} />;
});
