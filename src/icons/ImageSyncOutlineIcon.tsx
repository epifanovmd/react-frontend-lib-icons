import React, { FC, memo } from 'react';
import ImageSyncOutlineSvg from '../svg/image-sync-outline.svg';

export interface IImageSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageSyncOutlineIcon: FC<IImageSyncOutlineIconProps> = memo(props => {
  return <ImageSyncOutlineSvg {...props} />;
});
