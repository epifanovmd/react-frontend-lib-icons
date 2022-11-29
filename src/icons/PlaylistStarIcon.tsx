import React, { FC, memo } from 'react';
import PlaylistStarSvg from '../svg/playlist-star.svg';

export interface IPlaylistStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistStarIcon: FC<IPlaylistStarIconProps> = memo(props => {
  return <PlaylistStarSvg {...props} />;
});
