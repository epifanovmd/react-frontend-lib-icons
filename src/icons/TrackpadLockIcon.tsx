import React, { FC, memo } from 'react';
import TrackpadLockSvg from '../svg/trackpad-lock.svg';

export interface ITrackpadLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrackpadLockIcon: FC<ITrackpadLockIconProps> = memo(props => {
  return <TrackpadLockSvg {...props} />;
});
