import React, { FC, memo } from 'react';
import Video3DVariantSvg from '../svg/video-3d-variant.svg';

export interface IVideo3DVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Video3DVariantIcon: FC<IVideo3DVariantIconProps> = memo(props => {
  return <Video3DVariantSvg {...props} />;
});
