import React, { FC, memo } from 'react';
import AlbumSvg from '../svg/album.svg';

export interface IAlbumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlbumIcon: FC<IAlbumIconProps> = memo(props => {
  return <AlbumSvg {...props} />;
});
