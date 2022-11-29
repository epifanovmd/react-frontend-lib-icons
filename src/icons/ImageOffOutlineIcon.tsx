import React, { FC, memo } from 'react';
import ImageOffOutlineSvg from '../svg/image-off-outline.svg';

export interface IImageOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageOffOutlineIcon: FC<IImageOffOutlineIconProps> = memo(props => {
  return <ImageOffOutlineSvg {...props} />;
});
