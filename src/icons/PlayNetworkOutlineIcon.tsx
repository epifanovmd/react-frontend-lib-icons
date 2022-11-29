import React, { FC, memo } from 'react';
import PlayNetworkOutlineSvg from '../svg/play-network-outline.svg';

export interface IPlayNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayNetworkOutlineIcon: FC<IPlayNetworkOutlineIconProps> = memo(props => {
  return <PlayNetworkOutlineSvg {...props} />;
});
