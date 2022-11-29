import React, { FC, memo } from 'react';
import PlaylistMinusSvg from '../svg/playlist-minus.svg';

export interface IPlaylistMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistMinusIcon: FC<IPlaylistMinusIconProps> = memo(props => {
  return <PlaylistMinusSvg {...props} />;
});
