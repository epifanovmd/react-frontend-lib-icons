import React, { FC, memo } from 'react';
import ImageMultipleSvg from '../svg/image-multiple.svg';

export interface IImageMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageMultipleIcon: FC<IImageMultipleIconProps> = memo(props => {
  return <ImageMultipleSvg {...props} />;
});
