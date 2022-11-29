import React, { FC, memo } from 'react';
import DownloadLockSvg from '../svg/download-lock.svg';

export interface IDownloadLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadLockIcon: FC<IDownloadLockIconProps> = memo(props => {
  return <DownloadLockSvg {...props} />;
});
