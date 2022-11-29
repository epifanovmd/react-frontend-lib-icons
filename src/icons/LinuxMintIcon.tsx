import React, { FC, memo } from 'react';
import LinuxMintSvg from '../svg/linux-mint.svg';

export interface ILinuxMintIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinuxMintIcon: FC<ILinuxMintIconProps> = memo(props => {
  return <LinuxMintSvg {...props} />;
});
