import React, { FC, memo } from 'react';
import CloseNetworkSvg from '../svg/close-network.svg';

export interface ICloseNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseNetworkIcon: FC<ICloseNetworkIconProps> = memo(props => {
  return <CloseNetworkSvg {...props} />;
});
