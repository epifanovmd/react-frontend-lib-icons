import React, { FC, memo } from 'react';
import WatchVariantSvg from '../svg/watch-variant.svg';

export interface IWatchVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchVariantIcon: FC<IWatchVariantIconProps> = memo(props => {
  return <WatchVariantSvg {...props} />;
});
