import React, { FC, memo } from 'react';
import FolderAlertSvg from '../svg/folder-alert.svg';

export interface IFolderAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderAlertIcon: FC<IFolderAlertIconProps> = memo(props => {
  return <FolderAlertSvg {...props} />;
});
