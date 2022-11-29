import React, { FC, memo } from 'react';
import NetworkStrengthOutlineSvg from '../svg/network-strength-outline.svg';

export interface INetworkStrengthOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetworkStrengthOutlineIcon: FC<INetworkStrengthOutlineIconProps> = memo(props => {
  return <NetworkStrengthOutlineSvg {...props} />;
});
