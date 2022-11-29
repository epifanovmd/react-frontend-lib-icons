import React, { FC, memo } from 'react';
import FileRestoreSvg from '../svg/file-restore.svg';

export interface IFileRestoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRestoreIcon: FC<IFileRestoreIconProps> = memo(props => {
  return <FileRestoreSvg {...props} />;
});
