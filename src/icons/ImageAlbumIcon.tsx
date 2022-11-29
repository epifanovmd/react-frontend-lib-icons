import React, { FC, memo } from 'react';
import ImageAlbumSvg from '../svg/image-album.svg';

export interface IImageAlbumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageAlbumIcon: FC<IImageAlbumIconProps> = memo(props => {
  return <ImageAlbumSvg {...props} />;
});
