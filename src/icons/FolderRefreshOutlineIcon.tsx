import React, { FC, memo } from 'react';
import FolderRefreshOutlineSvg from '../svg/folder-refresh-outline.svg';

export interface IFolderRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderRefreshOutlineIcon: FC<IFolderRefreshOutlineIconProps> = memo(props => {
  return <FolderRefreshOutlineSvg {...props} />;
});
