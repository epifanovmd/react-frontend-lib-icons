import React, { FC, memo } from 'react';
import LinuxSvg from '../svg/linux.svg';

export interface ILinuxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinuxIcon: FC<ILinuxIconProps> = memo(props => {
  return <LinuxSvg {...props} />;
});
