import React, { FC, memo } from 'react';
import FolderDownloadSvg from '../svg/folder-download.svg';

export interface IFolderDownloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderDownloadIcon: FC<IFolderDownloadIconProps> = memo(props => {
  return <FolderDownloadSvg {...props} />;
});
