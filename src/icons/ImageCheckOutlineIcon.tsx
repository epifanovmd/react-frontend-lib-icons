import React, { FC, memo } from 'react';
import ImageCheckOutlineSvg from '../svg/image-check-outline.svg';

export interface IImageCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageCheckOutlineIcon: FC<IImageCheckOutlineIconProps> = memo(props => {
  return <ImageCheckOutlineSvg {...props} />;
});
