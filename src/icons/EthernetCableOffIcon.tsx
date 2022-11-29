import React, { FC, memo } from 'react';
import EthernetCableOffSvg from '../svg/ethernet-cable-off.svg';

export interface IEthernetCableOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EthernetCableOffIcon: FC<IEthernetCableOffIconProps> = memo(props => {
  return <EthernetCableOffSvg {...props} />;
});
