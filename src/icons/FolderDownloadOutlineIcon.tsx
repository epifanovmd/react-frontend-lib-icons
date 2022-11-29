import React, { FC, memo } from 'react';
import FolderDownloadOutlineSvg from '../svg/folder-download-outline.svg';

export interface IFolderDownloadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderDownloadOutlineIcon: FC<IFolderDownloadOutlineIconProps> = memo(props => {
  return <FolderDownloadOutlineSvg {...props} />;
});
