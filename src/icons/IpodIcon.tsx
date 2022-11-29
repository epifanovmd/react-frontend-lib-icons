import React, { FC, memo } from 'react';
import IpodSvg from '../svg/ipod.svg';

export interface IIpodIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IpodIcon: FC<IIpodIconProps> = memo(props => {
  return <IpodSvg {...props} />;
});
