import React, { FC, memo } from 'react';
import RemoteDesktopSvg from '../svg/remote-desktop.svg';

export interface IRemoteDesktopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RemoteDesktopIcon: FC<IRemoteDesktopIconProps> = memo(props => {
  return <RemoteDesktopSvg {...props} />;
});
