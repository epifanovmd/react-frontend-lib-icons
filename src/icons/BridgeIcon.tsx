import React, { FC, memo } from 'react';
import BridgeSvg from '../svg/bridge.svg';

export interface IBridgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BridgeIcon: FC<IBridgeIconProps> = memo(props => {
  return <BridgeSvg {...props} />;
});
