import React, { FC, memo } from 'react';
import PlaylistPlusSvg from '../svg/playlist-plus.svg';

export interface IPlaylistPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistPlusIcon: FC<IPlaylistPlusIconProps> = memo(props => {
  return <PlaylistPlusSvg {...props} />;
});
