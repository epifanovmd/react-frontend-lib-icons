import React, { FC, memo } from 'react';
import PlaylistPlaySvg from '../svg/playlist-play.svg';

export interface IPlaylistPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistPlayIcon: FC<IPlaylistPlayIconProps> = memo(props => {
  return <PlaylistPlaySvg {...props} />;
});
