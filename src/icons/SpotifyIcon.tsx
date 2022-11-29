import React, { FC, memo } from 'react';
import SpotifySvg from '../svg/spotify.svg';

export interface ISpotifyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpotifyIcon: FC<ISpotifyIconProps> = memo(props => {
  return <SpotifySvg {...props} />;
});
