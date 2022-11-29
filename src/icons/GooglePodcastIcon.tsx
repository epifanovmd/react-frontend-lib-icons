import React, { FC, memo } from 'react';
import GooglePodcastSvg from '../svg/google-podcast.svg';

export interface IGooglePodcastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GooglePodcastIcon: FC<IGooglePodcastIconProps> = memo(props => {
  return <GooglePodcastSvg {...props} />;
});
