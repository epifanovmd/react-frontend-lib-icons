import React, { FC, memo } from 'react';
import TrackLightOffSvg from '../svg/track-light-off.svg';

export interface ITrackLightOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrackLightOffIcon: FC<ITrackLightOffIconProps> = memo(props => {
  return <TrackLightOffSvg {...props} />;
});
