import React, { FC, memo } from 'react';
import WatchVibrateOffSvg from '../svg/watch-vibrate-off.svg';

export interface IWatchVibrateOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchVibrateOffIcon: FC<IWatchVibrateOffIconProps> = memo(props => {
  return <WatchVibrateOffSvg {...props} />;
});
