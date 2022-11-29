import React, { FC, memo } from 'react';
import NetworkStrengthOffOutlineSvg from '../svg/network-strength-off-outline.svg';

export interface INetworkStrengthOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrengthOffOutlineIcon: FC<INetworkStrengthOffOutlineIconProps> = memo(props => {
  return <NetworkStrengthOffOutlineSvg {...props} />;
});
