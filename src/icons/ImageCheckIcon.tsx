import React, { FC, memo } from 'react';
import ImageCheckSvg from '../svg/image-check.svg';

export interface IImageCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageCheckIcon: FC<IImageCheckIconProps> = memo(props => {
  return <ImageCheckSvg {...props} />;
});
