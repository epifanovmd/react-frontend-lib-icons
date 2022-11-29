import React, { FC, memo } from 'react';
import UploadLockSvg from '../svg/upload-lock.svg';

export interface IUploadLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadLockIcon: FC<IUploadLockIconProps> = memo(props => {
  return <UploadLockSvg {...props} />;
});
