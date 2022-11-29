import React, { FC, memo } from 'react';
import SshSvg from '../svg/ssh.svg';

export interface ISshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SshIcon: FC<ISshIconProps> = memo(props => {
  return <SshSvg {...props} />;
});
