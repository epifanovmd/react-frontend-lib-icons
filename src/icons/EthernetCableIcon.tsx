import React, { FC, memo } from 'react';
import EthernetCableSvg from '../svg/ethernet-cable.svg';

export interface IEthernetCableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EthernetCableIcon: FC<IEthernetCableIconProps> = memo(props => {
  return <EthernetCableSvg {...props} />;
});
