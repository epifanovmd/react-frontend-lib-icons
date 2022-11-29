import React, { FC, memo } from 'react';
import TunnelSvg from '../svg/tunnel.svg';

export interface ITunnelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TunnelIcon: FC<ITunnelIconProps> = memo(props => {
  return <TunnelSvg {...props} />;
});
