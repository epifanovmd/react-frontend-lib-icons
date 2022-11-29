import React, { FC, memo } from 'react';
import PlusNetworkSvg from '../svg/plus-network.svg';

export interface IPlusNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusNetworkIcon: FC<IPlusNetworkIconProps> = memo(props => {
  return <PlusNetworkSvg {...props} />;
});
