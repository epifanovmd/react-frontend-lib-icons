import React, { FC, memo } from 'react';
import NetworkStrengthOffSvg from '../svg/network-strength-off.svg';

export interface INetworkStrengthOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrengthOffIcon: FC<INetworkStrengthOffIconProps> = memo(props => {
  return <NetworkStrengthOffSvg {...props} />;
});
