import React, { FC, memo } from 'react';
import PlaylistMusicSvg from '../svg/playlist-music.svg';

export interface IPlaylistMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistMusicIcon: FC<IPlaylistMusicIconProps> = memo(props => {
  return <PlaylistMusicSvg {...props} />;
});
