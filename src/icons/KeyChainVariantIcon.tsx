import React, { FC, memo } from 'react';
import KeyChainVariantSvg from '../svg/key-chain-variant.svg';

export interface IKeyChainVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyChainVariantIcon: FC<IKeyChainVariantIconProps> = memo(props => {
  return <KeyChainVariantSvg {...props} />;
});
