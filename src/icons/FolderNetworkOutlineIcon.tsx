import React, { FC, memo } from 'react';
import FolderNetworkOutlineSvg from '../svg/folder-network-outline.svg';

export interface IFolderNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderNetworkOutlineIcon: FC<IFolderNetworkOutlineIconProps> = memo(props => {
  return <FolderNetworkOutlineSvg {...props} />;
});
