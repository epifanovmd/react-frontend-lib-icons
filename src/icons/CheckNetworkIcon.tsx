import React, { FC, memo } from 'react';
import CheckNetworkSvg from '../svg/check-network.svg';

export interface ICheckNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckNetworkIcon: FC<ICheckNetworkIconProps> = memo(props => {
  return <CheckNetworkSvg {...props} />;
});
