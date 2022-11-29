import React, { FC, memo } from 'react';
import FolderGoogleDriveSvg from '../svg/folder-google-drive.svg';

export interface IFolderGoogleDriveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderGoogleDriveIcon: FC<IFolderGoogleDriveIconProps> = memo(props => {
  return <FolderGoogleDriveSvg {...props} />;
});
