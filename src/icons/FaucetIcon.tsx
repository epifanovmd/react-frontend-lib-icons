import React, { FC, memo } from 'react';
import FaucetSvg from '../svg/faucet.svg';

export interface IFaucetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaucetIcon: FC<IFaucetIconProps> = memo(props => {
  return <FaucetSvg {...props} />;
});
