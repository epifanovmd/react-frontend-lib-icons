import React, { FC, memo } from 'react';
import RemoteSvg from '../svg/remote.svg';

export interface IRemoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RemoteIcon: FC<IRemoteIconProps> = memo(props => {
  return <RemoteSvg {...props} />;
});
