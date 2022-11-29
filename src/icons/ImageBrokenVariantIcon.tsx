import React, { FC, memo } from 'react';
import ImageBrokenVariantSvg from '../svg/image-broken-variant.svg';

export interface IImageBrokenVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageBrokenVariantIcon: FC<IImageBrokenVariantIconProps> = memo(props => {
  return <ImageBrokenVariantSvg {...props} />;
});
