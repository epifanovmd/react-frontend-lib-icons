import React, { FC, memo } from 'react';
import FolderZipSvg from '../svg/folder-zip.svg';

export interface IFolderZipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderZipIcon: FC<IFolderZipIconProps> = memo(props => {
  return <FolderZipSvg {...props} />;
});
