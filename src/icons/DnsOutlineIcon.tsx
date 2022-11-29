import React, { FC, memo } from 'react';
import DnsOutlineSvg from '../svg/dns-outline.svg';

export interface IDnsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DnsOutlineIcon: FC<IDnsOutlineIconProps> = memo(props => {
  return <DnsOutlineSvg {...props} />;
});
