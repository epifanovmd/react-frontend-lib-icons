import React, { FC, memo } from 'react';
import ImageSvg from '../svg/image.svg';

export interface IImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageIcon: FC<IImageIconProps> = memo(props => {
  return <ImageSvg {...props} />;
});
