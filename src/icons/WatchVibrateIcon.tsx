import React, { FC, memo } from 'react';
import WatchVibrateSvg from '../svg/watch-vibrate.svg';

export interface IWatchVibrateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchVibrateIcon: FC<IWatchVibrateIconProps> = memo(props => {
  return <WatchVibrateSvg {...props} />;
});
