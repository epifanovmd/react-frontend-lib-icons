import React, { FC, memo } from 'react';
import ImageAutoAdjustSvg from '../svg/image-auto-adjust.svg';

export interface IImageAutoAdjustIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageAutoAdjustIcon: FC<IImageAutoAdjustIconProps> = memo(props => {
  return <ImageAutoAdjustSvg {...props} />;
});
