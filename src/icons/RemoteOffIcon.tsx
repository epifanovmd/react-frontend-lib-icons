import React, { FC, memo } from 'react';
import RemoteOffSvg from '../svg/remote-off.svg';

export interface IRemoteOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RemoteOffIcon: FC<IRemoteOffIconProps> = memo(props => {
  return <RemoteOffSvg {...props} />;
});
