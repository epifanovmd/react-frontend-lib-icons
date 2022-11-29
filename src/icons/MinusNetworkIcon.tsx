import React, { FC, memo } from 'react';
import MinusNetworkSvg from '../svg/minus-network.svg';

export interface IMinusNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusNetworkIcon: FC<IMinusNetworkIconProps> = memo(props => {
  return <MinusNetworkSvg {...props} />;
});
