import React, { FC, memo } from 'react';
import EthernetSvg from '../svg/ethernet.svg';

export interface IEthernetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EthernetIcon: FC<IEthernetIconProps> = memo(props => {
  return <EthernetSvg {...props} />;
});
