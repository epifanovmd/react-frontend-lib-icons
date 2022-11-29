import React, { FC, memo } from 'react';
import FolderAlertOutlineSvg from '../svg/folder-alert-outline.svg';

export interface IFolderAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderAlertOutlineIcon: FC<IFolderAlertOutlineIconProps> = memo(props => {
  return <FolderAlertOutlineSvg {...props} />;
});
