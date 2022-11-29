import React, { FC, memo } from 'react';
import FolderKeyNetworkOutlineSvg from '../svg/folder-key-network-outline.svg';

export interface IFolderKeyNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderKeyNetworkOutlineIcon: FC<IFolderKeyNetworkOutlineIconProps> = memo(props => {
  return <FolderKeyNetworkOutlineSvg {...props} />;
});
