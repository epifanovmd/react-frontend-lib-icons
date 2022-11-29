import React, { FC, memo } from 'react';
import FolderRefreshSvg from '../svg/folder-refresh.svg';

export interface IFolderRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderRefreshIcon: FC<IFolderRefreshIconProps> = memo(props => {
  return <FolderRefreshSvg {...props} />;
});
