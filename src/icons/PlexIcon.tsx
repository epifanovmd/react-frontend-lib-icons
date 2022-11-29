import React, { FC, memo } from 'react';
import PlexSvg from '../svg/plex.svg';

export interface IPlexIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlexIcon: FC<IPlexIconProps> = memo(props => {
  return <PlexSvg {...props} />;
});
