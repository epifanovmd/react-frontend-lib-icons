import React, { FC, memo } from 'react';
import PlaylistMusicOutlineSvg from '../svg/playlist-music-outline.svg';

export interface IPlaylistMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistMusicOutlineIcon: FC<IPlaylistMusicOutlineIconProps> = memo(props => {
  return <PlaylistMusicOutlineSvg {...props} />;
});
