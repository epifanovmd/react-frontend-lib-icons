import React, { FC, memo } from 'react';
import TrackLightSvg from '../svg/track-light.svg';

export interface ITrackLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrackLightIcon: FC<ITrackLightIconProps> = memo(props => {
  return <TrackLightSvg {...props} />;
});
