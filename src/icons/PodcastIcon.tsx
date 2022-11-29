import React, { FC, memo } from 'react';
import PodcastSvg from '../svg/podcast.svg';

export interface IPodcastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PodcastIcon: FC<IPodcastIconProps> = memo(props => {
  return <PodcastSvg {...props} />;
});
