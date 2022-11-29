import React, { FC, memo } from 'react';
import PlayNetworkSvg from '../svg/play-network.svg';

export interface IPlayNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayNetworkIcon: FC<IPlayNetworkIconProps> = memo(props => {
  return <PlayNetworkSvg {...props} />;
});
