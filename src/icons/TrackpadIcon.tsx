import React, { FC, memo } from 'react';
import TrackpadSvg from '../svg/trackpad.svg';

export interface ITrackpadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrackpadIcon: FC<ITrackpadIconProps> = memo(props => {
  return <TrackpadSvg {...props} />;
});
