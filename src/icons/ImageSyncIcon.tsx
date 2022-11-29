import React, { FC, memo } from 'react';
import ImageSyncSvg from '../svg/image-sync.svg';

export interface IImageSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageSyncIcon: FC<IImageSyncIconProps> = memo(props => {
  return <ImageSyncSvg {...props} />;
});
