import React, { FC, memo } from 'react';
import ImageFrameSvg from '../svg/image-frame.svg';

export interface IImageFrameIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFrameIcon: FC<IImageFrameIconProps> = memo(props => {
  return <ImageFrameSvg {...props} />;
});
