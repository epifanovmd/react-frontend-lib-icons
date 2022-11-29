import React, { FC, memo } from 'react';
import KeyChainSvg from '../svg/key-chain.svg';

export interface IKeyChainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyChainIcon: FC<IKeyChainIconProps> = memo(props => {
  return <KeyChainSvg {...props} />;
});
