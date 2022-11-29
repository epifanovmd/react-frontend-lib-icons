import React, { FC, memo } from 'react';
import DnsSvg from '../svg/dns.svg';

export interface IDnsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DnsIcon: FC<IDnsIconProps> = memo(props => {
  return <DnsSvg {...props} />;
});
