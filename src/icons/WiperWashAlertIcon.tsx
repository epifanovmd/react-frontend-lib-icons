import React, { FC, memo } from 'react';
import WiperWashAlertSvg from '../svg/wiper-wash-alert.svg';

export interface IWiperWashAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WiperWashAlertIcon: FC<IWiperWashAlertIconProps> = memo(props => {
  return <WiperWashAlertSvg {...props} />;
});
