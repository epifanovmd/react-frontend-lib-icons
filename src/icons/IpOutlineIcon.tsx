import React, { FC, memo } from 'react';
import IpOutlineSvg from '../svg/ip-outline.svg';

export interface IIpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IpOutlineIcon: FC<IIpOutlineIconProps> = memo(props => {
  return <IpOutlineSvg {...props} />;
});
