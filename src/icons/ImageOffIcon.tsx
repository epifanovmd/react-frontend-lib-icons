import React, { FC, memo } from 'react';
import ImageOffSvg from '../svg/image-off.svg';

export interface IImageOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageOffIcon: FC<IImageOffIconProps> = memo(props => {
  return <ImageOffSvg {...props} />;
});
