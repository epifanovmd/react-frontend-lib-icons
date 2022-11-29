import React, { FC, memo } from 'react';
import ImageMinusOutlineSvg from '../svg/image-minus-outline.svg';

export interface IImageMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageMinusOutlineIcon: FC<IImageMinusOutlineIconProps> = memo(props => {
  return <ImageMinusOutlineSvg {...props} />;
});
