import React, { FC, memo } from 'react';
import FolderNetworkSvg from '../svg/folder-network.svg';

export interface IFolderNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderNetworkIcon: FC<IFolderNetworkIconProps> = memo(props => {
  return <FolderNetworkSvg {...props} />;
});
