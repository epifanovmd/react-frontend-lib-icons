import React, { FC, memo } from 'react';
import FirewireSvg from '../svg/firewire.svg';

export interface IFirewireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FirewireIcon: FC<IFirewireIconProps> = memo(props => {
  return <FirewireSvg {...props} />;
});
