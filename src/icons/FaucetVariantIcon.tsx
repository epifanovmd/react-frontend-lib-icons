import React, { FC, memo } from 'react';
import FaucetVariantSvg from '../svg/faucet-variant.svg';

export interface IFaucetVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaucetVariantIcon: FC<IFaucetVariantIconProps> = memo(props => {
  return <FaucetVariantSvg {...props} />;
});
