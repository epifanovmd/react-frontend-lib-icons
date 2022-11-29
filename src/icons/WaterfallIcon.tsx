import React, { FC, memo } from 'react';
import WaterfallSvg from '../svg/waterfall.svg';

export interface IWaterfallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterfallIcon: FC<IWaterfallIconProps> = memo(props => {
  return <WaterfallSvg {...props} />;
});
