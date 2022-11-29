import React, { FC, memo } from 'react';
import ImageOutlineSvg from '../svg/image-outline.svg';

export interface IImageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageOutlineIcon: FC<IImageOutlineIconProps> = memo(props => {
  return <ImageOutlineSvg {...props} />;
});
