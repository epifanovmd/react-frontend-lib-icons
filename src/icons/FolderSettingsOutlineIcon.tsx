import React, { FC, memo } from 'react';
import FolderSettingsOutlineSvg from '../svg/folder-settings-outline.svg';

export interface IFolderSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSettingsOutlineIcon: FC<IFolderSettingsOutlineIconProps> = memo(props => {
  return <FolderSettingsOutlineSvg {...props} />;
});
