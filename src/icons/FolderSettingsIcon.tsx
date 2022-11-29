import React, { FC, memo } from 'react';
import FolderSettingsSvg from '../svg/folder-settings.svg';

export interface IFolderSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSettingsIcon: FC<IFolderSettingsIconProps> = memo(props => {
  return <FolderSettingsSvg {...props} />;
});
