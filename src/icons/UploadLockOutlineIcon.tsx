import React, { FC, memo } from 'react';
import UploadLockOutlineSvg from '../svg/upload-lock-outline.svg';

export interface IUploadLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadLockOutlineIcon: FC<IUploadLockOutlineIconProps> = memo(props => {
  return <UploadLockOutlineSvg {...props} />;
});
