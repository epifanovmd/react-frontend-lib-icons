import React, { FC, memo } from 'react';
import FolderKeyNetworkSvg from '../svg/folder-key-network.svg';

export interface IFolderKeyNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderKeyNetworkIcon: FC<IFolderKeyNetworkIconProps> = memo(props => {
  return <FolderKeyNetworkSvg {...props} />;
});
