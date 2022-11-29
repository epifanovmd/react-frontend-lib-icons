import React, { FC, memo } from 'react';
import IpSvg from '../svg/ip.svg';

export interface IIpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IpIcon: FC<IIpIconProps> = memo(props => {
  return <IpSvg {...props} />;
});
