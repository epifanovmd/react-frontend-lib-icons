import React, { FC, memo } from 'react';
import WiperWashSvg from '../svg/wiper-wash.svg';

export interface IWiperWashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WiperWashIcon: FC<IWiperWashIconProps> = memo(props => {
  return <WiperWashSvg {...props} />;
});
