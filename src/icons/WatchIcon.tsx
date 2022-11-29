import React, { FC, memo } from 'react';
import WatchSvg from '../svg/watch.svg';

export interface IWatchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchIcon: FC<IWatchIconProps> = memo(props => {
  return <WatchSvg {...props} />;
});
