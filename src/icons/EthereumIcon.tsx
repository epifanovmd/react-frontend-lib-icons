import React, { FC, memo } from 'react';
import EthereumSvg from '../svg/ethereum.svg';

export interface IEthereumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EthereumIcon: FC<IEthereumIconProps> = memo(props => {
  return <EthereumSvg {...props} />;
});
