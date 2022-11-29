import React, { FC, memo } from 'react';
import DownloadLockOutlineSvg from '../svg/download-lock-outline.svg';

export interface IDownloadLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadLockOutlineIcon: FC<IDownloadLockOutlineIconProps> = memo(props => {
  return <DownloadLockOutlineSvg {...props} />;
});
