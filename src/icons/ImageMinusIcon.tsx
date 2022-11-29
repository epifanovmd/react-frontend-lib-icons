import React, { FC, memo } from 'react';
import ImageMinusSvg from '../svg/image-minus.svg';

export interface IImageMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageMinusIcon: FC<IImageMinusIconProps> = memo(props => {
  return <ImageMinusSvg {...props} />;
});
