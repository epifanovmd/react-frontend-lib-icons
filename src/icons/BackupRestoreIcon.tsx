import React, { FC, memo } from 'react';
import BackupRestoreSvg from '../svg/backup-restore.svg';

export interface IBackupRestoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BackupRestoreIcon: FC<IBackupRestoreIconProps> = memo(props => {
  return <BackupRestoreSvg {...props} />;
});
